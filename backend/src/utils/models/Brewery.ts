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
  await sql `INSERT INTO "brewery"("breweryId", "breweryAddress", "breweryCity", "breweryLat", "breweryLng", "breweryName", "breweryPictureUrl", "breweryState", "breweryWebsite", "breweryZipCode" )
  VALUES (gen_random_uuid(), ${breweryAddress}, ${breweryCity}, ${breweryLat}, ${breweryLng}, ${breweryName}, ${breweryPictureUrl}, ${breweryState}, ${breweryWebsite}, ${breweryZipCode})`
  return 'Brewery successfully created'
}

export async function updateBrewery (brewery: Brewery): Promise<string>{
  const {breweryId, breweryAddress, breweryCity, breweryLat, breweryLng, breweryName, breweryPictureUrl, breweryState, breweryWebsite, breweryZipCode} =brewery
  await sql `
  UPDATE "brewery"
  SET "breweryId" = ${breweryId}, "breweryAddress" = ${breweryAddress}, "breweryCity" = ${breweryCity}, "breweryLat" = ${breweryLat}, "breweryLng" = ${breweryLng}, "breweryName" = ${breweryName}, "breweryPictureUrl" = ${breweryPictureUrl}, "breweryState" = ${breweryState}, "breweryWebsite" = ${breweryWebsite}, "breweryZipCode" = ${breweryZipCode}
  WHERE "breweryId" = ${breweryId}`
  return 'Brewery updated Successfully'
}

export async function selectBreweryByBreweryId (breweryId: string): Promise<Brewery|null> {
  const result = await sql <Brewery[]>`SELECT "breweryId", "breweryAddress", "breweryCity", "breweryLat", "breweryLng" "breweryName", "breweryPictureUrl", "breweryState", "breweryWebsite", "breweryZipCode" from brewery
   WHERE "breweryId" = ${breweryId}`
  return result.length === 1 ? result[0] : null
}

export async function selectBreweryByBreweryName (breweryName: string): Promise<Brewery|null> {
  const result = await sql <Brewery[]>`SELECT "breweryId", "breweryAddress", "breweryCity", "breweryLat", "breweryLng" "breweryName", "breweryPictureUrl", "breweryState", "breweryWebsite", "breweryZipCode" from brewery
   WHERE "breweryName" = ${breweryName}`
  return result.length === 1 ? result[0] : null
}


export async function selectBreweries (): Promise<Brewery[]> {
  const results = await sql <Brewery[]>`SELECT "breweryId", "breweryAddress", "breweryCity", "breweryLat", "breweryLng" "breweryName", "breweryPictureUrl", "breweryState", "breweryWebsite", "breweryZipCode" from brewery`
  return results.length <= 1 ? results : []
}