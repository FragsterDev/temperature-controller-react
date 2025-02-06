import { useState } from 'react'
import Board from './components/board'

function App() {

  const [temp, setTemp] = useState(0)
  const [bg, setBg] = useState('rgb(3,90,166)')

  function increaseTemp(){
    if(temp === 30)
      return

    const newTemp = temp + 1

    if(newTemp>=17)
      setBg('rgb(255,82,0)')

    setTemp(newTemp)
  }

  function decreaseTemp(){

    if(temp === 0)
      return

    const newTemp = temp - 1

    if(newTemp<17)
      setBg("rgb(3,90,166)")

    setTemp(newTemp)
  }

  return (
    <div className={"main mt-4 flex justify-center"}>
      <Board temp={temp} setTemp={setTemp} increaseTemp={increaseTemp} decreaseTemp={decreaseTemp} bg={bg}/>
    </div>
  )
}

export default App