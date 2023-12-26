import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='header'>
            <h1>Space travellers' Hub</h1>
            <div>
                <Link to={'/'}>Rockets</Link>
                {' | '}
                <Link to={'/missions'}>Missions</Link>
                {' | '}
                <Link to={'/myprofile'}>My Profile</Link>
            </div>
        </div>
    </>
  )
}

export default Header
