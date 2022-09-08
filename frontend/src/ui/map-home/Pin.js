import { Marker, Popup } from 'react-map-gl'
import React, { useState } from 'react'

export function Pin (props) {
  const { breweries: { breweryLat: lat, breweryLng: lng, breweryName }, index } = props
  console.log(props)

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`

  const SIZE = 20
  const [showPopup, setShowPopup] = useState(false)
  console.log(showPopup)

  return (
    <>
      <Marker key={`marker-${index}`} longitude={lng} latitude={lat} onClick={(e) => {
        setShowPopup(!showPopup)
        e.originalEvent.stopPropagation()
      }}>
        <svg
          height={SIZE}
          viewBox="0 0 24 24"
          style={{
            cursor: 'pointer',
            fill: '#d00',
            stroke: 'none',
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
          }}
        >
          <path d={ICON}/>
        </svg>
      </Marker>
      {showPopup && (<Popup longitude={lng} latitude={lat} key={index} onClose={() => setShowPopup(false)} offset={30}>
        <div>
          <h2>{breweryName}</h2>
        </div>
      </Popup>)}
    </>
  )
}