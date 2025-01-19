import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import DishCard from './components/DishCard'

export default function App() {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
      <DishCard/>
    </main>
  )
}
