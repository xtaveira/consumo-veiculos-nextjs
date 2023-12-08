"use client"

import { FuelInfoProps, VehicleProps } from '@/app/page'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Button from './Button'

interface FormInterface {
    vehicles: VehicleProps[],
    fuelInfo: FuelInfoProps,
    setFuelInfo: Dispatch<SetStateAction<FuelInfoProps>>,
    newVehicle: VehicleProps,
    setNewVehicle: Dispatch<SetStateAction<VehicleProps>>,
    handleSubmit: (e: FormEvent) => Promise<void>,
    setFuelVehicleModal: Dispatch<SetStateAction<boolean>>

}

const FuelVehicleForm = ({ vehicles, fuelInfo, setFuelInfo, newVehicle, setNewVehicle, handleSubmit, setFuelVehicleModal }: FormInterface) => {

    const [plate, setPlate] = useState<string>()
    const [amount, setAmount] = useState<number>()
    const [newKm, setNewKm] = useState<number>()
    const [value, setValue] = useState<number>()




    const calculate = (e: FormEvent) => {

        const findVehicle = vehicles.find((vehicle) => vehicle.placa == plate) 
            console.log(findVehicle);
        if (findVehicle && newKm) {
            console.log(findVehicle)
            const kmUsed = newKm - findVehicle.km;
            const kmPerL = kmUsed / fuelInfo.litros;
            const newCategoria = (kmPerL: number): string => {
                if (kmPerL > 10)
                    return "Quase Econômico"
                else if (kmPerL > 15)
                    return "Muito Econômico"
                else if (kmPerL > 20)
                    return "Aprovada pelo INMETRO"
                else
                    return "Gasta demais"
            }

            setNewVehicle({
                placa: findVehicle.placa,
                cor: findVehicle.cor,
                modelo: findVehicle.modelo,
                consumo: kmPerL,
                categoria: newCategoria,
                km: fuelInfo.newKm,
            })

            console.log(setNewVehicle)

            handleSubmit(e)
        }
        else {
            setFuelInfo((fuelInfo) => ({ ...fuelInfo, placa: "Veículo não encontrado" }))
        }
    }

    return (
        <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
            <div className='w-full'>
                <h2 className="text-center">Abastecer Veículo</h2>
            </div>
            <label className="capitalize">placa<input required onChange={ (e) => setPlate(e.target.value) } className="text-black rounded-xl ml-2  px-2" id="placa" name="placa" value={plate} /></label>
            <label className="capitalize">litros<input required type="number" onChange={ (e) => setAmount(Number(e.target.value)) } className="text-black rounded-xl ml-2 px-2" id="litros" name="litros" value={amount} /></label>
            <label className="capitalize">novo km<input required type="number" onChange={ (e) => setNewKm(Number(e.target.value)) } className="text-black rounded-xl ml-2 px-2" id="km" name="km" value={newKm} /></label>
            <label className="capitalize">total R$<input type="number" required onChange={ (e) => setValue(Number(e.target.value)) } className="text-black rounded-xl ml-2 px-2" id="valor" name="valor" value={value} /></label>
            <div className="flex flex-wrap w-full justify-between">
                <Button title="CANCELAR" type="button" onClick={() => {
                    setFuelVehicleModal(false)
                    setFuelInfo((fuelInfo) => ({ ...fuelInfo, placa: "", valor: 0, litros: 0, newKm: 0 }))
                }} />
                <Button title="ABASTECER" type="submit"
                // onClick={() => {
                //     setFuelInfo((fuelInfo) => ({ ...fuelInfo, placa: "", valor: 0, litros: 0, newKm: 0 }))
                // }}
                />
            </div>
        </form>
    )
}

export default FuelVehicleForm