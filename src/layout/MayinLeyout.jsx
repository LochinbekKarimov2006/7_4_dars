import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MayinLeyout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default MayinLeyout