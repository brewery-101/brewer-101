import React from "react"
import { SignUpModal } from './SignUpModal'
import { SignInModal } from './SignInModal'
import { BreweryMap } from './BreweryMap'

export function Home () {
  return (
    <>

      <h1>Home</h1>
      <BreweryMap/>
      <SignUpModal/>
      <SignInModal/>
    </>
  )
}