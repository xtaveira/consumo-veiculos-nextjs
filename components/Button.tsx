import React, { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  title: string,
}


const Button = ({ type, title, ...props }: ButtonProps) => {

  if (type == null) type = "button"


  return (
    <button {...props} type={type} className="btn cursor-pointer hover:bg-gray-500" >
      {title}
    </button>
  )
}

export default Button