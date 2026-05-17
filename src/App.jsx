import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  // return !loading ? (
  //   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  //     <div className='w-full block'>
  //       <Header />
  //       <main>
  //       TODO:  <Outlet />
  //       </main>
  //       <Footer />
  //     </div>
  //   </div>
  // ) : null

return !loading ? (
<div className="min-h-screen flex flex-col bg-[#0f172a] text-white">
    <div className="w-full backdrop-blur-sm bg-white/70 shadow-xl rounded-xl m-4">
      <Header />
<main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
) : null

}

export default App