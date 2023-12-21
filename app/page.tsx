"use client"

import VehicleCard from '@/components/VehicleCard'
import React, { FormEvent, useEffect, useState } from 'react'
import Form from '@/components/Form'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import FuelVehicleForm from '@/components/FuelVehicleForm'

export type VehicleProps = {
  placa: string,
  cor: string,
  modelo: string,
  consumo: number,
  categoria: any,
  km: number,
}

export type FuelInfoProps = {
  placa: string,
  litros: number,
  valor: number,
  newKm: number
}

const page = () => {

  const [createNewVehicle, setCreateNewVehicle] = useState(false)
  const [fuelVehicleModal, setFuelVehicleModal] = useState(false)
  const [vehicles, setVehicles] = useState<VehicleProps[]>([])
  const [newVehicle, setNewVehicle] = useState<VehicleProps>({} as VehicleProps)
  const [fuelInfo, setFuelInfo] = useState<FuelInfoProps>({} as FuelInfoProps)

  const activeModal = () => {
    setCreateNewVehicle(!createNewVehicle)
    setFuelVehicleModal(false)
  }

  const getVehicles = async () => {
    try {
      const response = await axios.get('/api/vehicles/route', {withCredentials: true, timeout: 30000});
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
      const response = await axios.post('/api/insertVehicles/route', newVehicle);

      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setCreateNewVehicle(false)
  }

  const updateVehicle = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/updateVehicles/route', newVehicle);

      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setFuelVehicleModal(false)
  }

  const fuelVehicle = async (e: FormEvent) => {
    e.preventDefault()





    try {





    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }




  return (
    <div className="min-h-screen grid grid-rows-[10%,80%,10%] bg-gray-800 text-white" >
      <Navbar newVehicleModal={activeModal} fuelModal={() => { 
        setFuelVehicleModal(!fuelVehicleModal) 
        setCreateNewVehicle(false)}} />
      <section className="flex justify-center items-center flex-col sm:flex-row">
        {createNewVehicle && <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap border-2 border-white bg-gray-800 rounded ">
          <Modal className={`${createNewVehicle ? 'block' : 'hidden'}`} >
            <Form
              newVehicle={newVehicle}
              setNewVehicle={setNewVehicle}
              handleSubmit={createVehicle}
              setCreateNewVehicle={setCreateNewVehicle}
            />
          </Modal>
        </div>}

        {fuelVehicleModal && <div className=" h-[80%] w-full sm:max-w-[80%] m-3 flex justify-center items-center flex-wrap border-2 border-white bg-gray-800 rounded ">
          <Modal>
            <FuelVehicleForm
              vehicles={vehicles}
              fuelInfo={fuelInfo}
              setFuelInfo={setFuelInfo}
              newVehicle={newVehicle}
              setNewVehicle={setNewVehicle}
              handleSubmit={updateVehicle}
              setFuelVehicleModal={setFuelVehicleModal}
            />
          </Modal>
        </div>
        }



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