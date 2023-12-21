import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import Button from './Button'

interface NavbarType {
  newVehicleModal: any,
  fuelModal: any
}

const Navbar = ({newVehicleModal, fuelModal}: NavbarType) => {
  return (
    <nav className=" flex justify-evenly items-center bg-gray-900 ">
        <h1>Controle de Consumo</h1>
        <div className='flex gap-1 flex-col sm:flex-row sm:gap-5'>
        <Button onClick={newVehicleModal} title="Novo Veículo"/>
        <Button onClick={fuelModal} title="ABASTECER"/>
        </div>
    </nav>
  )
}

export default Navbar