import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './map-home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrewCrewNavBar } from './shared/navbar/Navbar'

export const App = () => (
  <>
    <BrewCrewNavBar/>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>

  </>
)