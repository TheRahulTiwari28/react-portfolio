import React from 'react'
import './FooterStyle.css'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        <div>
                            <p>Mumbai, Maharashtra, India</p>
                        </div>
                    </div> 
                    <div className='phone'>
                       <h4>
                       <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        +91 93242 72772
                       </h4>
                    </div> 
                    <div className='email'>
                       <h4>
                       <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        info@gmail.com
                       </h4>
                    </div> 
                </div>

                <div className='right'>
                    <h4>About Me</h4>
                    <p>I am a Front-End developer from India. I create professional websites. I love art and always try to show unique views to the audience through my design.
                    </p>
                    <div className='social'>
                        <FaFacebook size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaTwitter size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
