import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import OTPVerification from './components/OTPVerification'
import SongList from './components/SongList'
import ErrorPage from './components/ErrorPage'
import './App.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} >
          <Route index element={<SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/otp_verification' element={<OTPVerification />} />
          <Route path='/song_list' element={<SongList />} />

        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App