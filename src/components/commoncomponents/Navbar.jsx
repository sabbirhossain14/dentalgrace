import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import Button from './Button'


const Navbar = () => {
  return (
    <Container>
        <div className="navbar flex items-center text-center justify-between py-4">
            <div className='w-[] bg-amber-200'>
                <img src="../public/images/Logo.png" alt="logo" className='w-[173px]'/>
            </div>
            <div>
                <ul className='flex gap-6 font-[Manrope] text-[20px] font-medium text-[#333333]'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/patientreviews">Patient Reviews</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <Button text="Book Now" />
            </div>
        </div>
    </Container>
  )
}

export default Navbar