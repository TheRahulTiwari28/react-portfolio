import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BannerImg from '../components/BannerImg'
import Form from '../components/Form'

const Contact = () => {
    return (
        <>
        <Navbar/>
        <BannerImg
            heading="Conatc"
            text="Let's have a chat."
        />
        <Form/>
        <Footer/>
        </>
    )
}

export default Contact
