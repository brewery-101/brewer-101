import { Marker, Popup } from 'react-map-gl'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Map-Home-Style.css'

export function Pin (props) {
  const { breweries: { breweryLat: lat, breweryLng: lng, breweryName, breweryAddress }, index } = props
  console.log(props)

  const [showPopup, setShowPopup] = useState(false)
  console.log(showPopup)

  return (
    <>
      <Marker key={`marker-${index}`} longitude={lng} latitude={lat} onClick={(e) => {
        setShowPopup(!showPopup)
        e.originalEvent.stopPropagation()
      }}>
        <FontAwesomeIcon className="pinOnMap" size="2x" icon="fa-solid fa-beer-mug-empty" />
      </Marker>
      {showPopup && (<Popup longitude={lng} latitude={lat} key={index} onClose={() => setShowPopup(false)} offset={30}>

        {/*This controls what's in the popup*/}
        <div>
          <h2>{breweryName}</h2>
          <p>{breweryAddress}</p>
        </div>
      </Popup>)}
    </>
  )
}