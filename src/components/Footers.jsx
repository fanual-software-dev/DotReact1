import React from 'react'
import { Link } from 'react-router-dom'

const Footers = () => {
  return (
    <div className='footer'>
      <div className='footer-div'>
        <p>Features</p>
        <Link to="/">Cool stuff</Link>
        <Link to="/">Random feature</Link>
        <Link to="/">Team Feature</Link>
      </div>

      <div className='footer-div'>
        <p>Resources</p>
        <Link to="/">Resource</Link>
        <Link to="/">Resource name</Link>
      </div>

      <div className='footer-div'>
        <p>About</p>
        <Link to="/">Team</Link>
        <Link to="/">Locations</Link>
      </div>
    </div>
  )
}

export default Footers
