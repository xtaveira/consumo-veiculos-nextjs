import React from 'react'

interface ButtonProps {
    title: string
}


const Button = ({title}:ButtonProps) => {
  return (
    <div className="btn cursor-pointer hover:bg-gray-500">
        {title}
    </div>
  )
}

export default Button