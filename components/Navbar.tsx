import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className=" flex justify-evenly items-center">
        <h1>Controle de Consumo</h1>
        <div className='flex gap-1 flex-col sm:flex-row sm:gap-5'>
        <Button title="Novo Veículo"/>
        <Button title="ABASTECER"/>
        </div>
    </nav>
  )
}

export default Navbar