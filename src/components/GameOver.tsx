import Button from "./Button"

function GameOver({ retry, score }: any) {
  return (
    <div className="flex flex-col items-center gap-24 font-gameOver">
      <h1 className="font-bold text-6xl text-red-600 uppercase">Game Over</h1>
      <h3 className="font-bold">Sua pontuação foi: <span className="text-amber-400 text-xl">{score}</span></h3>
      <Button text="Tentar Novamente" onClick={retry} bgColor="bg-blue-600 hover:bg-blue-500" />
    </div>
  )
}

export default GameOver