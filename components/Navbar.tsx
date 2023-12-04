import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import Button from './Button'

interface NavbarType {
  onClick: any
}

const Navbar = ({onClick}: NavbarType) => {
  return (
    <nav className=" flex justify-evenly items-center">
        <h1>Controle de Consumo</h1>
        <div className='flex gap-1 flex-col sm:flex-row sm:gap-5'>
        <Button onClick={onClick} title="Novo Veículo"/>
        <Button title="ABASTECER"/>
        </div>
    </nav>
  )
}

export default Navbar