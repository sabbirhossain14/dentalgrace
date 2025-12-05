import React, { useState } from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";
import HeroSection from "../HeroSection";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Patient Reviews", path: "/patientreviews" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#EBF9FF] shadow-md sticky top-0 z-50">
        <Container>
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/images/Logo.png" 
                alt="logo" 
                className="w-[160px] md:w-[180px] hover:scale-105 transition-transform duration-300 cursor-pointer" 
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <ul className="flex gap-1">
                {links.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink 
                      to={link.path} 
                      className="relative px-4 py-2 rounded-lg group"
                    >
                      {({ isActive }) => (
                        <>
                          <span className={`text-[16px] font-medium transition-all duration-300 ${
                            isActive 
                              ? "text-[#29B287]" 
                              : "text-gray-700 hover:text-[#29B287]"
                          }`}>
                            {link.name}
                          </span>
                          
                          {/* Hover Effect */}
                          {!isActive && (
                            <motion.div
                              className="absolute left-0 right-0 h-[2px] bg-[#29B287] bottom-0 scale-x-0 group-hover:scale-x-100 origin-left"
                              transition={{ duration: 0.3 }}
                            />
                          )}
                          
                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="navbarIndicator"
                              className="absolute left-0 right-0 h-[3px] bg-[#29B287] bottom-0 rounded-full"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              
              {/* CTA Button with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-6"
              >
                <Button 
                  text="Book Appointment" 
                  className="bg-gradient-to-r from-[#29B287] to-[#24a077] hover:from-[#24a077] hover:to-[#29B287] shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 rounded-full font-semibold"
                  pulseEffect={true}
                />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-lg hover:bg-[#d9f0ff] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, height: "auto", y: 0 },
              closed: { opacity: 0, height: 0, y: -20 }
            }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 border-t border-[#c8e7ff]">
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <motion.li
                    key={link.path}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <NavLink 
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-[#d9f0ff] transition-colors group"
                    >
                      {({ isActive }) => (
                        <div className="flex items-center justify-between">
                          <span className={`text-lg font-medium ${
                            isActive ? "text-[#29B287]" : "text-gray-700"
                          }`}>
                            {link.name}
                          </span>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 bg-[#29B287] rounded-full"
                              layoutId="mobileIndicator"
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.li
                  variants={{
                    open: { opacity: 1, scale: 1 },
                    closed: { opacity: 0, scale: 0.8 }
                  }}
                  className="mt-4"
                >
                  <Button 
                    text="Book Now" 
                    fullWidth={true}
                    className="bg-gradient-to-r from-[#29B287] to-[#24a077] rounded-full py-3"
                  />
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </Container>
        {/* Hero Section */}
        <HeroSection />
      </div>

      
    </>
  );
};

export default Navbar;