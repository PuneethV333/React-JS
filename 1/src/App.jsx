import React, { useState } from 'react'
import { useFormState } from 'react-dom'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit")
  }
  const [a,SetA] = useState('')

   

  return (
    <div>
      <form onSubmit={() => {
        submitFunc()
      }}>
        <input
         onChange={(e) => {
          SetA = e.target.value;
         }}
         type="text" placeholder='Enter your name' className='px-4 py-3 text-xl rounded bg-amber-50 m-5 ' value={a}/>
        <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded m-5 text-white'>submit</button>
      </form>
    </div>
  )
}

export default App
