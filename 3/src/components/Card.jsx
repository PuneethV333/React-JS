import React from 'react'

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <h1>{props.username}</h1>
      <h2>{props.age} {props.prof}</h2>
      <button>Add friend</button>
    </div>
  )
}
// props is an object
export default Card
