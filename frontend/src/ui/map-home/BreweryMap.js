import React from 'react'
import Map from 'react-map-gl'
import { Pin } from './Pin'
import "./Map-Home-Style.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialBreweries } from '../../store/breweries'




export function BreweryMap () {

  const breweries = useSelector(state => state.breweries ?? [])
  const dispatch = useDispatch ()
  const initialEffects = () => {
    dispatch(fetchInitialBreweries())
  }

  React.useEffect(initialEffects, [dispatch])

  return (
    <>
        <div className= "mapTarget">
            <Map
              initialViewState={{
                latitude: 35.1048,
                longitude: -106.6300,
                zoom: 11.5
              }}

              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {breweries.map((breweries, index) =>
                <Pin breweries={breweries} index={index} key={index}/>)}
            </Map>
      </div>
    </>
  )
}