import React from 'react'
import Container from './commoncomponents/Container'
import Button from './commoncomponents/Button'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='bg-[#EBF9FF]'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-between items-center pt-8 lg:pt-16 pb-16'>
          {/* Left Content */}
          <motion.div 
            className='w-full lg:w-[50%] mb-12 lg:mb-0'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className='font-[Manrope] font-bold text-[40px] md:text-[50px] lg:text-[57px] leading-[1.2] text-[#303030] mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Graceful Smiles <br />
              <span className='text-[#29B287]'>
                Confident Lives Ahead
              </span>
            </motion.h1>
            
            <motion.p 
              className='font-[Manrope] font-normal text-[18px] lg:text-[20px] leading-[1.6] text-[#303030] mb-8 lg:mb-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience expert dental care tailored to your needs. At DentalGrace, we combine compassion and precision to enhance your oral health and transform your smile. From routine check-ups to advanced treatments, our dedicated team ensures your journey to a brighter. Let us help you smile with grace and confidence every day.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                text="Step Into Graceful Smiles" 
                className="bg-gradient-to-r from-[#29B287] to-[#24a077] hover:from-[#24a077] hover:to-[#29B287] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg"
                pulseEffect={true}
              />
            </motion.div>
            
            {/* Stats Section */}
            <motion.div 
              className='flex flex-wrap gap-6 mt-10 lg:mt-16'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className='text-center'>
                <div className='text-[32px] font-bold text-[#29B287]'>5,000+</div>
                <div className='text-gray-600'>Happy Patients</div>
              </div>
              <div className='text-center'>
                <div className='text-[32px] font-bold text-[#29B287]'>15+</div>
                <div className='text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-[32px] font-bold text-[#29B287]'>98%</div>
                <div className='text-gray-600'>Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className='w-full lg:w-[50%] flex justify-center lg:justify-end'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className='relative'
            >
              <img 
                src="/images/heroimg.png" 
                alt="HeroImage" 
                className='w-full max-w-[600px] lg:max-w-none rounded-2xl shadow-2xl'
              />
              
              {/* Floating Badge */}
              <motion.div
                className='absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-[#EBF9FF] rounded-full flex items-center justify-center'>
                    <span className='text-2xl'>🏆</span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-800'>Best Dental Clinic</div>
                    <div className='text-sm text-gray-600'>2024 Award Winner</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Appointment Card */}
              <motion.div
                className='absolute -bottom-6 left-6 bg-gradient-to-r from-[#29B287] to-[#24a077] text-white rounded-2xl p-4 shadow-xl'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className='text-sm mb-1'>Book Your Appointment</div>
                <div className='font-bold text-lg'>+1 (555) 123-4567</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection