import { Request, Response } from 'express'
import {
  Brewery, insertBrewery,
  selectBreweryByBreweryId,
  selectBreweryByBreweryName,
  updateBrewery
} from '../../utils/models/Brewery'
import { Status } from '../../utils/interfaces/Status'



/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
export async function postBreweryController (request: Request, response: Response): Promise<Response> {
  try {
    // const { breweryId } = request.params
    // const brewery = request.session.brewery as Brewery
    // const breweryIdFromSession = brewery.breweryId as string
    //
    // if (breweryId !== breweryIdFromSession) {
    //   return response.json({status: 400, data: null, message: 'You are not allowed to perform this task'})
    // }

    const {
      breweryAddress,
      breweryCity,
      breweryLat,
      breweryLng,
      breweryName,
      breweryPictureUrl,
      breweryState,
      breweryWebsite,
      breweryZipCode } = request.body

    const brewery: Brewery = {breweryId: null, breweryAddress, breweryCity, breweryLat, breweryLng, breweryName, breweryPictureUrl, breweryState, breweryWebsite, breweryZipCode }


    const message:string = await insertBrewery(brewery)
    return response.json({status: 200, data: null, message: 'Brewery successfully made' })
  }catch (error: any){
    return response.json({status: 400, data: null, message: error.message})
  }
}

export async function getBreweryByBreweryIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { breweryId } = request.params
    const mySqlResult = await selectBreweryByBreweryId(breweryId)
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null }
    return response.json(status)
  } catch (error: any) {
    return (response.json({ status: 400, data: null, message: error.message }))
  }
}

export async function getBreweryByBreweryNameController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { breweryName } = request.params
    const mySqlResult = await selectBreweryByBreweryName(breweryName)
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null }
    return response.json(status)
  } catch (error: any) {
    return (response.json({ status: 400, data: null, message: error.message }))
  }
}

export async function putBreweryController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { breweryId } = request.params
    const { breweryAddress, breweryCity, breweryLat, breweryLng, breweryName, breweryPictureUrl, breweryState, breweryWebsite, breweryZipCode } = request.body
    const previousBrewery: Brewery | null = await selectBreweryByBreweryId(breweryId)

    if (previousBrewery === null) {
      return response.json({ status: 404, data: null, message: 'brewery does not exist' })
    }

    if (previousBrewery.breweryId !== breweryId) {
      return response.json({ status: 404, data: null, message: 'You are not allowed to preform this task.' })
    }

    const updatedValues = { breweryAddress, breweryCity, breweryLat, breweryLng, breweryName, breweryPictureUrl, breweryState, breweryWebsite, breweryZipCode }

    const newBrewery = { ...previousBrewery, ...updatedValues }
    const message = await updateBrewery(newBrewery)
    return response.json({ status: 200, data: null, message })
  } catch (error: any) {
    return response.json({ status: 500, data: null, message: 'internal server error' })
  }
}

