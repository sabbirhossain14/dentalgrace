import React from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Patient Reviews", path: "/patientreviews" },
  { name: "Contact", path: "/contact" },
];



const Navbar = () => {
  return (
    <div className="bg-[#EBF9FF]">
      <Container>
        <div className="navbar flex items-center justify-between py-4">
          <div>
            <img src="../public/images/Logo.png" alt="logo" className="w-[173px]" />
          </div>

          <ul className="flex gap-8 font-[Manrope] text-[20px] font-medium text-[#333333] relative">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} className="relative">
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-[#29B287]" : ""}>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute left-0 right-0 h-[3px] bg-[#29B287] bottom-[-6px]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
          </ul>

          <div>
            <Button text="Book Now" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
