import React from 'react'
import './Title.css'

const Title = ({subTitle,title}) => {
    // taking props from app.jsx
  return (
    <div className='title'>
        <p>{subTitle} </p>
        <h2>{title} </h2>
    </div>
  )
}

export default Title