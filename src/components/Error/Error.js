import React from 'react'

import sadImg from './sad.png'
import './Error.css'

function Error() {
  return (
    <div className="Error">
      <img className="poster error-img" src={sadImg}></img>
    </div>
  )
}

export default Error
