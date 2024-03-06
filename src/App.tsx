import { useState, useEffect, useCallback } from "react";
import { wordsList as data } from "./data/words";
import Start from "./components/Start";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const initialGuesses = 5;

function App() {
  const [gameStage, setGameStage] = useState("start");
  const [words] = useState<any>(data);

  const [word, setWord] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(initialGuesses);
  const [score, setScore] = useState(0);

  const randomWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const randCategory = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const randWord = words[randCategory][Math.floor(Math.random() * words[randCategory].length)];

    return { randWord, randCategory };
  }, [words]);

  const startGame = useCallback(() => {
    clearStage();

    const { randWord, randCategory } = randomWordAndCategory();
    let wordLetters = randWord.split("");

    wordLetters = wordLetters.map((letter: string) => letter.toLowerCase());

    setCategory(randCategory);
    setWord(randWord);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [randomWordAndCategory]);

  const verifyLetter = (letter: string) => {
    const formatedLetter = letter.toLowerCase();

    if (guessedLetters.includes(formatedLetter) || wrongLetters.includes(formatedLetter)) { return }

    if (letters.includes(formatedLetter)) {
      setGuessedLetters((prev) => [
        ...prev,
        formatedLetter
      ]);
    } else {
      setWrongLetters((prev) => [
        ...prev,
        formatedLetter
      ]);

      setGuesses((prev) => prev - 1);
    }
  }

  function clearStage() {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  const restartGame = () => {
    setScore(0);
    setGuesses(initialGuesses);
    setGameStage(stages[0].name);
  }

  useEffect(() => {
    if (guesses === 0) {
      clearStage();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const wordLetters = [...new Set(letters)];

    if (guessedLetters.length === wordLetters.length) {
      setScore((prevScore) => prevScore + 100);
      setGuesses((prev) => prev + 1);
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <>
      <main id="content" className="min-h-screen flex items-center justify-center text-center p-8 bg-[#6c54d8]">
        {gameStage === "start" && <Start start={startGame} />}
        {gameStage === "game" && <Game
          verifyLetter={verifyLetter}
          word={word}
          category={category}
          letters={letters}
          score={score}
          guesses={guesses}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
        />}
        {gameStage === "end" && <GameOver retry={restartGame} score={score} />}
      </main>
    </>
  )
}

export default App
