import React from 'react'

type VehicleProps = {
    placa: string,
    cor?: string,
    modelo: string,
    consumo: number,
    categoria: string
}

const VehicleCard = ({ placa, cor, modelo, consumo, categoria }: VehicleProps) => {


    return (
        <div className={`
            ${cor ? ` ${cor} ` :` bg-white text-black `}
            p-8 flex justify-center flex-col items-center m-3 max-h-[25%] rounded-xl`}>
            <h6>{modelo}</h6>
            <p>Consumo Atual: {consumo>0 ? <span>{consumo}km/l</span> : <span>Não calculado</span>}</p>
            <p>Categoria: {categoria}</p>

        </div>
    )
}

export default VehicleCard





