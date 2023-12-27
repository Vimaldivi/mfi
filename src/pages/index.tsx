import React from "react"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Brands from "./components/Brands"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <Brands />
      <Blogs />
      <Footer />
    </main>
  )
}
