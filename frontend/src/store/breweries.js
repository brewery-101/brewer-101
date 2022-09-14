import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/httpConfig'

const slice = createSlice(
  {
    name: "breweries",
    initialState: [],
    reducers: {
      setInitialBreweries: (breweries, action) => {

        return action.payload
      },
      setIndividualBrewery: (breweries, action) => {
        breweries.push(action.payload)
      }
    }
  }
)

export const {setInitialBreweries} = slice.actions

export function fetchInitialBreweries() {
  return async function (dispatch) {
    const {data} = await httpConfig('/apis/brewery/breweries')
    dispatch (setInitialBreweries(data))
  }
}

export default slice.reducer