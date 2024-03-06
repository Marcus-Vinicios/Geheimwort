import { useState, useRef } from "react"
import Button from "./Button"

function Game({ verifyLetter, category, letters, score, guesses, guessedLetters, wrongLetters }: any) {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<any>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");

    letterInputRef.current?.focus();
  }

  return (
    <div id="gameContainer" className="border-2 border-white rounded-md p-8">
      <h1 className="font-bold text-4xl mb-4">Advinhe a palavra</h1>
      <div id="headContainer" className="flex items-center justify-between">
        <h3 className="font-bold mb-4">Dica: <span className="text-amber-400">{category}</span></h3>
        <p className="font-bold mb-4">Pontuação: <span className="text-amber-400">{score}</span></p>
      </div>
      <p className="font-bold mb-2 text-justify">Você possui: <span className="text-amber-400">{guesses}</span> tentativa(s)</p>
      <div id="lettersContainer" className="flex items-center gap-2 border border-white rounded-md p-6 mb-2">
        {letters.map((letter: string, i: number) => (
          guessedLetters.includes(letter)
            ? (<span key={i} className="border border-white px-2 py-1 w-12 h-12 text-3xl text-center uppercase font-bold">{letter}</span>)
            : (<span key={i} className="border bg-white px-2 py-1 w-12 h-12 text-3xl text-center uppercase font-bold"></span>)
        ))}
      </div>
      <div id="inputContainer">
        <p className="font-bold mb-2 mt-2 text-2xl">Digite uma letra:</p>
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2">
          <input
            className="bg-transparent border-2 w-12 h-12 text-center px-2 py-1 uppercase font-bold text-3xl"
            onChange={(e) => setLetter(e.target.value)}
            type="text"
            name="letter"
            maxLength={1}
            value={letter || ""}
            ref={letterInputRef}
            required
          />
          <Button text="Jogar" bgColor="bg-emerald-500 hover:bg-emerald-600" />
        </form>
      </div>
      <div id="footerContainer" className="flex items-center gap-2 mt-4 font-bold">
        <p className="text-xl">Letras incorretas:</p>
        {wrongLetters.map((letter: string, i: number) => (
          <span key={i} className="text-amber-400">{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game