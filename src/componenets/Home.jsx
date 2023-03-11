import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div>Home</div>
      <Outlet />
    </>
  )
}

export default Home