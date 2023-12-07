import React from 'react'

type VehicleProps = {
    placa: string,
    cor: string,
    modelo: string,
    consumo: number,
    categoria: string
}

const VehicleCard = ({ placa, cor, modelo, consumo, categoria }: VehicleProps) => {


    return (
        <div className={`p-3 flex justify-center flex-col items-center m-3 max-h-[25%] rounded-xl border-2 border-white
        bg-gray-800
        `}>
            <h6 className="mb-4">{modelo}</h6>
            <div>
                <p>Consumo: {consumo > 0 ? <span>{consumo}km/l</span> : <span>Não calculado</span>}</p>
                <p>Categoria: {categoria}</p>
            </div>

        </div>
    )
}

export default VehicleCard





