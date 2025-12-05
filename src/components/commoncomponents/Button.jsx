import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  text,
  bg = "bg-[#29B287]",
  textColor = "text-white",
  fontName = "font-['Manrope']",
  fontWeight = "font-semibold",
  padding = "px-10 py-4",
  fontSize = "text-lg",
  borderRadius = "rounded-xl",
  border = "border-none",
  hoverScale = 1.05,
  hoverShadow = true,
  pulseEffect = false,
  className = "",
  icon = null,
  iconPosition = "left", // "left" or "right"
  ...props
}) => {
  return (
    <motion.button
      className={`
        ${bg} ${textColor} ${fontName} ${fontWeight} ${padding} 
        ${fontSize} ${borderRadius} ${border} ${className}
        relative overflow-hidden cursor-pointer focus:outline-none
        flex items-center justify-center gap-2
        transition-colors duration-200
      `}
      
      // Hover Animation
      whileHover={{
        scale: hoverScale,
        boxShadow: hoverShadow ? "0 10px 25px rgba(41, 178, 135, 0.3)" : "none",
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}
      
      // Click Animation
      whileTap={{ 
        scale: 0.97,
        transition: { duration: 0.1 }
      }}
      
      // Initial Animation
      initial={{ opacity: 0.9, y: 0 }}
      animate={{ 
        opacity: 1,
        boxShadow: pulseEffect ? [
          "0 0 0 0 rgba(41, 178, 135, 0.7)",
          "0 0 0 10px rgba(41, 178, 135, 0)",
          "0 0 0 0 rgba(41, 178, 135, 0)"
        ] : "none"
      }}
      
      transition={pulseEffect ? {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      } : { type: "spring", stiffness: 400, damping: 20 }}
      
      {...props}
    >
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{
          x: "200%",
          transition: { duration: 0.7 }
        }}
      />
      
      {/* Button Content */}
      <motion.span 
        className="relative z-10 flex items-center gap-2"
        whileHover={{ x: 2 }}
      >
        {icon && iconPosition === "left" && (
          <motion.span 
            className="inline-flex"
            whileHover={{ scale: 1.1 }}
          >
            {icon}
          </motion.span>
        )}
        
        {text}
        
        {icon && iconPosition === "right" && (
          <motion.span 
            className="inline-flex"
            whileHover={{ scale: 1.1 }}
          >
            {icon}
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  )
}

export default Button