import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContentStyle.css'
import ImgOne from '../assets/image-five.avif'
import ImgTwo from '../assets/image-four.avif'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>i am Rahul Tiwari
                    A Front-End Web Developer
                    I am from India. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.
                    I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.
                    My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.
                </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className="img" src={ImgOne} alt="true" />
                    </div>
                    <div className='img-stack bottom'>
                        <img className="img" src={ImgTwo} alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
