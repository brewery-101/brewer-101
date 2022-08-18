import {Request, Response} from 'express';
import Mailgun from 'mailgun.js';
import formData from 'form-data'
import Client from 'mailgun.js/dist/lib/client';

export async function signUpController (request: Request, response: Response): Promise<Response | undefined>{
try {
  const mailgun: Mailgun = new Mailgun(formData)
  const mailgunClient: Client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})

  const { profileEmail, profilePassword, profileName } = request.body
  const profileHash = await setHash(profilePassword)
}
}