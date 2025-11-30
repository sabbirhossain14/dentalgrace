import React from 'react'

const Button = ({text,bg="#29B287",fontName="Manrope",fontWeight="Medium", color="white",paddingY="16px",paddingX="40px",size="xl", radius="10", border="none"}) => {
  return (
    <button
      style={{
        backgroundColor:bg,
        fontFamily:fontName,
        fontWeight:fontWeight,
        fontSize:size,
        color:color,
        paddingTop:paddingY,
        paddingBottom:paddingY,
        paddingLeft:paddingX,
        paddingRight:paddingX,
        borderRadius: `${radius}px`,
        border:border,
        cursor:'pointer',


    }}
    >{text}</button>
  )
}

export default Button