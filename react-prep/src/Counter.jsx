import React, { useState } from 'react'

const Count = () => {
  const [num,SetNum]  = useState(0);
  const increase = () =>{
    SetNum(num+1);
  }
  const decrease = () =>{
    SetNum(num-1);
  }
  return (
    
    <div>
      <h2>Count is {num}</h2>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>decreament</button>
    </div>
  )
}

export default Count
