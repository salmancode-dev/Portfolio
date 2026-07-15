import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='img2' src={profile_img} alt="" />
      <h1><span>I'm Salman Mughal,</span> frontend developer based in Pakistan.</h1>
      <p>I am a frontend developer from Lahore, with 1 years of  experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="hero-action">
         <Link to='contact'
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            ><div   className="hero-connect">Connect with me</div></Link>
         <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
