import { Marker, Popup } from 'react-map-gl'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Map-Home-Style.css'

export function Pin (props) {
<<<<<<< HEAD
  const { breweries: { breweryLat: lat, breweryLng: lng, breweryName, breweryAddress, breweryWebsite, breweryState, breweryCity }, index } = props

=======
  const { breweries: { breweryLat: lat, breweryLng: lng, breweryName, breweryAddress, breweryWebsite}, index } = props
  console.log(props)
>>>>>>> 299137e1228b047d8deaa9eb876e6fe81ee0cb66

  const [showPopup, setShowPopup] = useState(false)


  return (
    <>
      <Marker key={`marker-${index}`} longitude={lng} latitude={lat} onClick={(e) => {
        setShowPopup(!showPopup)
        e.originalEvent.stopPropagation()
      }}>
        <FontAwesomeIcon className="pinOnMap" size="2x" icon="fa-solid fa-beer-mug-empty" />
      </Marker>
      {showPopup && (<Popup longitude={lng} latitude={lat} key={index} onClose={() => setShowPopup(false)} offset={30} className="breweryPopUp rounded">

        {/*This controls what's in the popup*/}
        <div>
<<<<<<< HEAD
          <h2 className="modalInfo">{breweryName}</h2>
          <p className="modalInfo">{breweryAddress}</p>
          <p className="modalInfo">{breweryCity}, {breweryState}</p>
          {(breweryWebsite !== null) &&
          <a href={breweryWebsite}>Visit Website</a>
        }
=======
          <h2 className="mapBreweryName">{breweryName}</h2>
          <p className="mapBreweryAddress">{breweryAddress}</p>
          {breweryWebsite !== null && (<a href={breweryWebsite}>Visit Website</a>)}
>>>>>>> 299137e1228b047d8deaa9eb876e6fe81ee0cb66
        </div>
      </Popup>)}
    </>
  )
}