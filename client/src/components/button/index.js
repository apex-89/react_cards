import React from 'react'

function Button(props) {
  return (
    <div>
        <a href={props.url} target="_blank">See More</a>
    </div>
  )
}

export default Button