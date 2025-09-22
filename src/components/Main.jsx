import React from 'react'
import Sidebar from './Sidebar'
import Videos from '../components/videos'
function Main() {
  return (
    <div className='w-full min-h-screen flex  bg-black'>
      <Sidebar></Sidebar>
      <Videos></Videos>
    </div>
  )
}

export default Main
