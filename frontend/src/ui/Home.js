import React from "react"
import { SignUpModal } from './SignUpModal'
import { SignInModal } from './SignInModal'
export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <SignUpModal/>
      <SignInModal/>
    </>
  )
}