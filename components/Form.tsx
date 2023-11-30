"use client"

import axios from 'axios'
import React, { useState } from 'react'
import Button from './Button'

const Form = () => {

  const [formData, setFormData] = useState({
    placa: '',
    modelo: '',
    cor: ''
  })


  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/vehicles', formData);
      console.log('Response from server:', response.data)
    } catch (error) {
      console.error('Error submitting form:',error)
    }


    // setNewVehicle(false)
  }

  return (
    <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
      <div className='w-full'>
        <h2 className="text-center">Novo Veículo</h2>
      </div>
      <label className="capitalize">placa<input className="text-black rounded-xl ml-2  px-2" id="placa" name="placa" /></label>
      <label className="capitalize">modelo<input className="text-black rounded-xl ml-2 px-2" id="modelo" name="modelo" /></label>
      <label className="capitalize">cor<input className="text-black rounded-xl ml-2 px-2" id="cor" name="cor" /></label>
      <Button title="ADICIONAR" type="submit" />
    </form>
  )
}

export default Form