import React from 'react'
import { Header } from '../component/Header'
import { LoginBanner } from '../component/LoginBanner'
import { LoginForm } from '../component/LoginForm'

export const Login = () => {
  return (
    <>
        <Header />
        <LoginBanner />
        <LoginForm />   
    </>
  )
}
