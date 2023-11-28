import React from 'react'

type VehicleProps = {
    placa: string,
    color?: string,
    modelo: string,
    consumo: number,
    categoria: string
}

const VehicleCard = ({ placa, color, modelo, consumo, categoria }: VehicleProps) => {
    return (
        <div className={`${ color && `bg-${color}-500 `} ${!color && ` bg-white text-black`} p-8 flex justify-center flex-col items-center m-3 max-h-[25%] rounded-xl`}>
            <h6>{modelo}</h6>
            <p>Consumo Atual: {consumo}km/l</p>
            <p>Categoria: {categoria}</p>

        </div>
    )
}

export default VehicleCard