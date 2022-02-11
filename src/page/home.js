import '../App.css'
import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from './Cards'
import Footer from '../components/Footer'
function Home ( ){
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}
export default Home