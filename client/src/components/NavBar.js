import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}