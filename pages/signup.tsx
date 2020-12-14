import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileNav } from '../components/mobile/MobileNav'
import { Navbar } from '../components/Navbar'
import { main } from '../styles/home'

interface signupProps {}

const signup: React.FC<signupProps> = ({}) => {
  return (
    <main>
      <Header title="Sign Up" />
      <style jsx>{main}</style>
      <MobileNav />
      <Footer />
    </main>
  )
}

export default signup
