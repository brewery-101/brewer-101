import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './map-home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrewCrewNavBar } from './shared/navbar/Navbar'
import { ProfilePage } from './profile-page/ProfilePage'

export const App = () => (
  <>
    <BrewCrewNavBar/>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
        <Route path='/profile-page' element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>

  </>
)