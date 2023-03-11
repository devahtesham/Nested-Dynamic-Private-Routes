import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../componenets/About'
import Ahsan from '../componenets/Ahsan'
import Ahtesham from '../componenets/Ahtesham'
import Contact from '../componenets/Contact'
import Error from '../componenets/Error'
import Home from '../componenets/Home'
import Person from '../componenets/Person'
import PrivateRoutes from '../componenets/PrivateRoutes/PrivateRoutes'
// import NavBar from '../componenets/NavBar'
const Router = () => {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        {/* =================== This is Private Routing ============= */}
        <Route element={<PrivateRoutes />}>
          <Route path='/about' element={<About />}>
            {/* ============ This is Dynamic Routing ============ */}
            <Route path=':id' element={<Person />} />
            {/* ======= This is Nested Routing ======== */}
            {/* <Route path='ahtesham' element={<Ahtesham />} /> */}
            {/* <Route path='ahsan' element={<Ahsan />} /> */}
          </Route>
        </Route>
        <Route path='*' element={<Error />} />

      </Routes>

    </>
  )
}

export default Router