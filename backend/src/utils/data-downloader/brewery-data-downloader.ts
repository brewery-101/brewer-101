import axios from 'axios';
import {Brewery, insertBrewery} from '../models/Brewery';
const Geocodio = require('geocodio-library-node');



function OBDBBreweryDataDownloader(): Promise<any> {
  async function main() {
    try {
      await downloadBreweries()
    } catch (error) {
      console.error(error)
    }
  }

  return main()

  async function downloadBreweries() {
      try{

        const geocoder = new Geocodio(process.env.GEOCODEIO_API_KEY)

    const {data} = await axios("https://api.openbrewerydb.org/breweries?by_city=Albuquerque&per_page=33")
    for (let result of data) {

      const {name, street, city, postal_code, longitude, latitude, website_url} = result;
      //if latitude or longitude is null use GeocodeIo to grab lat and lng.

      const response = await geocoder
        .geocode(`${street}, Albuquerque, NM`)
          /*console.log(response.results[0].location.lat);*/

      const brewery: Brewery = {
        breweryId: null,
        breweryAddress: street as string,
        breweryCity: city as string,
        breweryLat: /*latitude ??*/ response.results[0].location.lat as string,
        breweryLng: /*longitude ??*/ response.results[0].location.lng as string,
        breweryName: name as string,
        breweryPictureUrl: "come back to and fix",
        breweryState: "NM",
        breweryWebsite: website_url as string,
        breweryZipCode: postal_code.slice(0,5) as string,
      }
      console.log(await insertBrewery(brewery))
    }
  }


  catch
    (error)
    {
      throw error
    }
  }
}


  OBDBBreweryDataDownloader().catch(error => {
    console.error(error)
  })