import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <p>Company name</p>

        <div className='nav'>
            <Link className='links' to="/">Features</Link>
            <Link className='links' to="/enterprise">Enterprise</Link>
            <Link className='links' to="/support">Support</Link>
            <Link className='links' to="/home">Home</Link>
        </div>
      
    </div>
  )
}

export default Navbar
