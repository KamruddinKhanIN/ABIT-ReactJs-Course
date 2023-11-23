import React from 'react';
import './Button.css'

const Button = ({resetHandler}) => {
  return (
    <div className='btn' onClick={resetHandler}>
        Reset
    </div>
  )
}

export default Button