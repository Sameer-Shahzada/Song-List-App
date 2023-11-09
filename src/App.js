import { React, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SongList from './components/SongList'
import ErrorPage from './components/ErrorPage'
// import SongList2 from './components/SongList2'
import './App.css'

const App = () => {

  const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem("Auth")));
  console.log(auth)

  return (
    (auth === null) ? <SignIn setAuth={setAuth} /> :
      <>
        <Routes>
          <Route path='/' element={<SongList />} >
            <Route index element={<SongList />} />
          </Route>
          {/* <Route path='/song_list2' element={<SongList2 />} /> */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </>
  )
}
export default App