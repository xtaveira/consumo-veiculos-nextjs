"use client"

import VehicleCard from '@/components/VehicleCard'
import React, { useEffect, useState } from 'react'
import dbConnect from '@/utils/database'
import Button from '@/components/Button'
import Form from '@/components/Form'



const page = () => {

  const [newVehicle, setNewVehicle] = useState(false)

  useEffect(() => {
    // connectToDb();
    setNewVehicle(false)
  }, [])


  const vehicles = [
    {
      placa: "FZY-7F49",
      color: "bg-red-400",
      modelo: "FAN-150",
      consumo: 40,
      categoria: "econômica"
    },
    {
      placa: "AVE-8A23",
      modelo: "SANDERO",
      consumo: 10,
      categoria: "gastão"
    },
  ]





 

  return (
    <>
      {newVehicle && <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
       <Form />
      </div>}
      
      <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.placa}
            placa={vehicle.placa}
            color={vehicle.color}
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