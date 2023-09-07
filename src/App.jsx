import React from 'react'
import { Navbar } from './components'
import { About, Choose, ContactUs, CourseDetails, CourseEnroll, Header, NumberCount, ProvideService, Team } from "./container"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ProvideService/>
      <CourseEnroll/>
      <About/>
      <Choose/>
      <NumberCount/>
      <CourseDetails/>
      <Team/>
      <ContactUs/>
    </div>
  )
}

export default App