import React from 'react'

interface ButtonProps {
  type?: "button" | "submit",
  title: string,
  setCreateNewVehicle?: () => {}
}


const Button = ({ type, title, setCreateNewVehicle }: ButtonProps) => {

  if (type == null) type = "button"


  return (
    <button type={type} className="btn cursor-pointer hover:bg-gray-500" onClick={setCreateNewVehicle} >
      {title}
    </button>
  )
}

export default Button