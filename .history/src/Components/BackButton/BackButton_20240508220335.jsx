import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const nav=useNavigate();
  return (
    <div>
      <button onClick={nav(-1)}>Back</button>
    </div>
  )
}

export default BackButton
