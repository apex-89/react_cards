import React from 'react'

function CardBody(props) {
    console.log(props)
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        
    </div>
  )
}

export default CardBody