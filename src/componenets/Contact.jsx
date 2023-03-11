import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <NavBar /> */}
      <div>Contact</div>
      <button onClick={() => {
        navigate("/")
      }}>go back</button>
    </>
  )
}

export default Contact