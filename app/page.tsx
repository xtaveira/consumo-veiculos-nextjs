"use client"

import VehicleCard from '@/components/VehicleCard'
import React, { useEffect, useState } from 'react'
import dbConnect from '@/utils/database'
import Button from '@/components/Button'
import Form from '@/components/Form'
import axios from 'axios'

type VehicleProps = {
  placa: string,
  cor?: string,
  modelo: string,
  consumo: number,
  categoria: string
}

const page = () => {

  const [createNewVehicle, setCreateNewVehicle] = useState(true)
  const [vehicles, setVehicles] = useState([])
  const [newVehicle, setNewVehicle] = useState({
    placa: "",
    modelo: "",
    consumo: 0,
    categoria: "Não definida"
  })

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



  const createVehicle = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

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
    <>
      {createNewVehicle && <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
        <Form
          newVehicle={newVehicle}
          setNewVehicle={setNewVehicle}
          handleSubmit={createVehicle}
          setCreateNewVehicle={setCreateNewVehicle}
        />
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
    </>
  )
}

export default page