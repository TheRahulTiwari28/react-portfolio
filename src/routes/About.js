import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BannerImg from '../components/BannerImg'
import AboutContent from '../components/AboutContent'

const About = () => {
    return (
        <>
        <Navbar/>
        <BannerImg
            heading="ABOUT"
            text="I'm a friendly Front-End Developer."
        />
        <AboutContent/>
        <Footer/>
        </>
    )
}

export default About
