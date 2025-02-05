function Display(){
  return (
    <div className={"w-48 h-48 bg-blue-400 rounded-full border border-amber-50 items-center flex justify-center"}>
      <div className={"temp text-amber-50 text-3xl font-medium"}>30 C</div>
    </div>
  )
}

function Buttons(){
  return (
    <div className="w-64 h-16 bg-amber-100">

    </div>
  )
}


function Board() {
  return (
    <div className={"font-bold w-96 h-96 bg-blue-800 rounded-2xl justify-around flex flex-col items-center"}>
      <Display />
      <Buttons />
    </div>
  )
}

export default Board