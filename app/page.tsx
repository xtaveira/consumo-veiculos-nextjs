"use client"

import VehicleCard from '@/components/VehicleCard'
import React, { useEffect } from 'react'
import { connectToDb } from '@/utils/database'

const page = () => {

  useEffect(() => {
    // connectToDb();
  }, [])
  

  const vehicles = [
    {
      placa: "FZY-7F49",
      color: "red",
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
    <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
      {vehicles.map((vehicle)=> (
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
  )
}

export default page