import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <div class="h-screen flex flex-col justify-center items-center transform -translate-y-20 gap-5 mt-10">
        <h1 class="text-5xl">Welcome!</h1>
        <AuthForm />
    </div>
  )
}

export default AuthPage
