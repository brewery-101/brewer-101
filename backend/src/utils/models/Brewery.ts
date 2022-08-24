import {sql} from '../database.utils';

export interface Brewery {
  breweryId: string | null,
  breweryAddress: string,
  breweryCity: string,
  breweryLat: string,
  breweryLng: string,
  breweryName: string,
  breweryPictureUrl: string,
  breweryState: string,
  breweryWebsite: string,
  breweryZipCode: string,
}



export async function insertBrewery (brewery: Brewery) :Promise<string>{
  const {breweryAddress, breweryCity, breweryLat, breweryLng, breweryName, breweryPictureUrl, breweryState, breweryWebsite, breweryZipCode} = brewery
  await sql `
  INSERT INTO "brewery"("breweryId", "breweryAddress", "breweryCity", "breweryLat", "breweryLng" "breweryName", "breweryPictureUrl", "breweryState", "breweryWebsite", "breweryZipcode" )
  VALUES (gen_random_uuid(), ${breweryAddress}, ${breweryCity}, ${breweryLat}, ${breweryLng})`
}