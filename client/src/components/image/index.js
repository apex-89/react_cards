import React from 'react'
import './index.css'

function Image(props) {
  return (
    <div>
        <img className="card-img" src={props.img} alt={props.title} />
    </div>
  )
}

export default Image