import React from 'react'
import MainHeader from '../layout/MainHeader'
import Parallax from '../common/Parallax'
import HotelService from '../common/HotelService'
import RoomCarousel from '../common/RoomCarousel'
import { useLocation } from 'react-router'

const Home = () => {
  const location = useLocation()
  const message = location.state && location.state.message
  
  return (
    <section>
      {message && <p className="text-warning px-5">{message}</p>}
    <MainHeader/>
    <div className="container">
      <RoomCarousel/>
      <Parallax/>
      <RoomCarousel/>
      <HotelService/>
      <Parallax/>
      <RoomCarousel/>
    </div>
      
    </section>
  )
}

export default Home