import React, {useState} from 'react'
import './CounterBox.css'
import Button from './Button'

const CounterBox = () => {

    const [value, setValue] = useState(0)

    function resetHandler()
    {
        setValue(0);
    }
  return (
    <div>
      <div className='counter-container'>
        <button className='decrement-button' onClick={()=>{setValue(value-1)}}>-</button>
        <div>{value}</div>
        <button className='increment-button' onClick={()=>{setValue(value+1)}}>+</button>
      </div>

      <Button resetHandler={resetHandler}></Button>

    </div>
  )
}

export default CounterBox