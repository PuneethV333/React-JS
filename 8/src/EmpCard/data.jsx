import React from 'react'

const data = (props) => {
  return (
    <div>
        <div>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <p>{props.greeting}</p>

    </div>
    </div>
  )
}

export default data
