function Display(){
  return (
    <div className={"w-52 h-52 bg-[rgb(3,90,166)] rounded-full border-3 border-amber-50 items-center flex justify-center"}>
      <div className={"temp text-amber-50 text-4xl font-medium"}>30 C</div>
    </div>
  )
}

function Buttons(){
  return (
    <div className="w-64 h-24 flex justify-around">
      <button className="">
        <div className="w-20 h-20 rounded-full bg-[rgb(105,104,104)] hover:bg-[rgb(184,184,184)] hover:cursor-pointer border-2 border-amber-50  flex justify-center items-center">
          <p className="text-white text-3xl">+</p>
        </div>
      </button>

      <button className="">
      <div className="w-20 h-20 rounded-full bg-[rgb(105,104,104)] border-2 border-amber-50 hover:bg-[rgb(184,184,184)] cursor-pointer flex justify-center items-center">
        <p className="text-white text-3xl">-</p>
      </div>
      </button>
    </div>
  )
}


function Board() {
  return (
    <div className={"font-bold w-72 h-96 bg-[rgb(43,89,112)] rounded-2xl justify-around flex flex-col items-center"}>
      <Display />
      <Buttons />
    </div>
  )
}

export default Board