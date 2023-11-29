import React from 'react'

interface ButtonProps {
  type?: "button" | "submit",
  title: string,
  action?: Function
}


const Button = ({ type, title }: ButtonProps) => {

  if (type == null) type = "button"


  return (
    <button type={type} className="btn cursor-pointer hover:bg-gray-500" >
      {title}
    </button>
  )
}

export default Button