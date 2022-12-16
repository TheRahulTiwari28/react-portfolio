import React from 'react';
import "./HeroImgStyle.css"
import IntroImg from '../assets/image-one.avif'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'> 
                <img className='intro-img' src={IntroImg} alt='IntroImg'/>
            </div>
        <div className='content'>
            <p>HI, I'M A Rahul Tiwari</p>
            <h1>FrontEnd Developer.</h1>
            <div>
                <Link to="/project" className="btn">
                    Projects
                </Link>
                <Link to="/contact" className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
        </div>
    )
}

export default HeroImg
