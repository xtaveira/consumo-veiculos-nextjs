"use client"

import VehicleCard from '@/components/VehicleCard'
import React, { useEffect, useState } from 'react'
import dbConnect from '@/utils/database'
import Button from '@/components/Button'



const page = () => {

  const [newVehicle, setNewVehicle] = useState(true)

  useEffect(() => {
    // connectToDb();
    setNewVehicle(true)
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





  const handleSubmit = () => {
    // e.preventDefault();
    setNewVehicle(false)

  }

  return (
    <>
      {newVehicle && <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap">
        <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
          <div className='w-full'>
            <h2 className="text-center">Novo Veículo</h2>
          </div>
          <label className="capitalize">placa  <input className="text-black rounded-xl ml-2  px-2" id="placa" name="placa" /></label>
          <label className="capitalize">modelo  <input className="text-black rounded-xl ml-2 px-2" id="modelo" name="modelo" /></label>
          <label className="capitalize">cor  <input className="text-black rounded-xl ml-2 px-2" id="cor" name="cor" /></label>
          <Button title="ADICIONAR" type="submit" />
        </form>
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