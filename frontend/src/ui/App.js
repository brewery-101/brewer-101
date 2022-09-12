import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './map-home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { BrewCrewNavBar } from './shared/navbar/Navbar'
import { ProfilePage } from './profile-page/ProfilePage'
import { BreweryPage } from './brewery/BreweryPage'
import { Provider } from 'react-redux'


import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDove,
  faEnvelope,
  faKey,
  faPencilAlt,
  faPhone,
  faSignOutAlt,
  faStroopwafel, faUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone, faPencilAlt, faSignOutAlt, faUser);

export const App = ({store}) => (
  <>
    <Provider store={store}>
    <BrowserRouter>
      <BrewCrewNavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
        <Route exact path='/profile-page/:profileId' element={<ProfilePage/>} profileId=":profileId" />
        <Route path='/Brewery/' element={<BreweryPage/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
)