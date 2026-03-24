import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Discription from '../components/Discription'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Steps/>
      <Discription/>
      <Testimonials/>
      <GenerateBtn/> 
    </div>
  )
}
