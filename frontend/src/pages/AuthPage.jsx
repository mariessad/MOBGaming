import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignIn from '../components/SignIn'
function AuthPage({ setUser }) {
  return (
    <div className='authBackground'>
      <h1 className='mt-4 auth-headers'>Welcome to MOBGaming </h1>
      <SignUpForm setUser={setUser} />
      <br />
      <SignIn setUser={setUser} />
    </div>
  )
}

export default AuthPage