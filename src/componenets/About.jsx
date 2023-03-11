import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const About = () => {
  return (
    <>
      {/* <NavBar /> */}
      <button>
        <Link to="/about/ahtesham">Ahtesham</Link>
      </button>

      <button>
        <Link to="/about/ahsan">Ahsan</Link>
      </button>

      <Outlet />
    </>
  )
}

export default About