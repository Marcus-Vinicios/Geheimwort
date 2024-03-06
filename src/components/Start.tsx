import Button from "./Button"

function Start({ start }: any) {
  return (
    <div className="flex flex-col items-center border-2 border-white rounded-md gap-10 p-20">
      <h1 className="font-bold text-4xl">Geheimwort</h1>
      <p className="text-lg">Clique no botão para iniciar!</p>
      <Button onClick={start} text="Start" bgColor="bg-emerald-500 hover:bg-emerald-600" />
    </div>
  )
}

export default Start