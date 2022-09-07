import React from "react"
import { Container, } from 'react-bootstrap'
import Map from 'react-map-gl'
import { Pin } from './Pin'
import "./Map-Home-Style.css"

export function BreweryMap () {
  const [points] = React.useState([
    { lat: 35.332, lng: -106.652 },
    { lat: 35.339, lng: -106.656 },
    { lat: 35.40, lng: -106.666 },
    { lat: 35.23, lng: -106.4444 }
  ])

  return (
    <>
      <Container fluid className= "mapContainerTarget">
        <div className= "mapTarget">
            <Map
              initialViewState={{
                latitude: 35.33,
                longitude: -106.65,
                zoom: 9
              }}

              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
            </Map>
      </div>
      </Container>
    </>
  )
}