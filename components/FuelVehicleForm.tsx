

import { FuelInfoProps, VehicleProps } from '@/app/page'
import React, { Dispatch, FormEvent, SetStateAction } from 'react'
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

    const calculate = (e: FormEvent) => {
        const findVehicle = vehicles.filter((vehicle) => vehicle.placa == fuelInfo.placa)
        if (findVehicle) {
            console.log(findVehicle)
            const kmUsed = fuelInfo.newKm - findVehicle.km;
            const kmPerL = kmUsed / fuelInfo.litros;
            const newCategoria = (kmPerL: number) => {
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
            <label className="capitalize">placa<input required onChange={(e) => setFuelInfo((fuelInfo) => ({ ...fuelInfo, placa: e.target.value.toUpperCase() }))} className="text-black rounded-xl ml-2  px-2" id="placa" name="placa" value={fuelInfo.placa} /></label>
            <label className="capitalize">litros<input required type="number" onChange={(e) => setFuelInfo((fuelInfo) => ({ ...fuelInfo, litros: Number(e.target.value) }))} className="text-black rounded-xl ml-2 px-2" id="litros" name="litros" value={fuelInfo.litros} /></label>
            <label className="capitalize">novo km<input required type="number" onChange={(e) => setFuelInfo((fuelInfo) => ({ ...fuelInfo, newKm: Number(e.target.value) }))} className="text-black rounded-xl ml-2 px-2" id="km" name="km" value={fuelInfo.newKm} /></label>
            <label className="capitalize">total R$<input type="number" required onChange={(e) => setFuelInfo((fuelInfo) => ({ ...fuelInfo, valor: Number(e.target.value) }))} className="text-black rounded-xl ml-2 px-2" id="valor" name="valor" value={fuelInfo.valor} /></label>
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