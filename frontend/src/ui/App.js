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
  faSearch,
  faDove,
  faEnvelope,
  faKey,
  faPencilAlt,
  faPhone,
  faSignOutAlt,
  faStroopwafel, faUser, faBeerMugEmpty
} from '@fortawesome/free-solid-svg-icons'
import { ProfileSearch } from './profileSearch/ProfileSearch'

library.add(faSearch, faEnvelope, faKey, faDove, faPhone, faPencilAlt, faSignOutAlt, faUser, faBeerMugEmpty);

export const App = ({store}) => (
  <>
    <Provider store={store}>
    <BrowserRouter>
      <BrewCrewNavBar/>
      <Routes>
        <Route path='/profileSearch' element={<ProfileSearch/>} />
        <Route path='/' element={<Home />} />
        <Route exact path='/profile-page/:profileId' element={<ProfilePage/>} profileId=":profileId" />
        <Route path='/Brewery/' element={<BreweryPage/>} />
        <Route path='*' element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
)