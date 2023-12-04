"use client"

import VehicleCard from '@/components/VehicleCard'
import React, { FormEvent, useEffect, useState } from 'react'
import dbConnect from '@/utils/database'
import Button from '@/components/Button'
import Form from '@/components/Form'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export type VehicleProps = {
  placa: string,
  cor: string,
  modelo: string,
  consumo: number,
  categoria: string
}

const page = () => {

  const [createNewVehicle, setCreateNewVehicle] = useState(true)
  const [vehicles, setVehicles] = useState<VehicleProps[]>([])
  const [newVehicle, setNewVehicle] = useState<VehicleProps>({} as VehicleProps)

  const activeModal = () => {
    console.log(createNewVehicle)
    setCreateNewVehicle(!createNewVehicle)
  }

  const getVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/vehicles/getVehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  useEffect(() => {
    getVehicles()
  }, [, vehicles])



  const createVehicle = async (e: FormEvent) => {
    e.preventDefault()

    try {
      console.log(newVehicle)
      const response = await axios.post('http://localhost:3000/api/vehicles/insertVehicle', newVehicle);

      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setCreateNewVehicle(false)
  }

  

  return (
    <div className="min-h-screen grid grid-rows-[10%,80%,10%] bg-gray-900 text-white" >
      <Navbar onClick={activeModal} />
      <section className="flex justify-center items-center flex-col sm:flex-row">
        {createNewVehicle && <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
          <Modal className={`${createNewVehicle ? 'block' : 'hidden'}`} >
            <Form
              newVehicle={newVehicle}
              setNewVehicle={setNewVehicle}
              handleSubmit={createVehicle}
              setCreateNewVehicle={setCreateNewVehicle}
            />
          </Modal>
        </div>}



        <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
          {vehicles.map((vehicle: VehicleProps) => (
            <VehicleCard
              key={vehicle.placa}
              placa={vehicle.placa}
              cor={vehicle.cor}
              modelo={vehicle.modelo}
              consumo={vehicle.consumo}
              categoria={vehicle.categoria}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page