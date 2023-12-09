// import { VehicleProps } from '@/app/page'
// import Button from './Button'
// import { Dispatch, FormEvent, SetStateAction } from 'react'


// interface FormInterface {
//   newVehicle: VehicleProps
//   setNewVehicle: Dispatch<SetStateAction<VehicleProps>>,
//   handleSubmit: (e: FormEvent) => Promise<void>,
//   setCreateNewVehicle: Dispatch<SetStateAction<boolean>>

// }

// const Form = ({ newVehicle, setNewVehicle, handleSubmit, setCreateNewVehicle }: FormInterface) => {

//   return (
//     <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
//       <div className='w-full'>
//         <h2 className="text-center">Novo Veículo</h2>
//       </div>
//       <label className="capitalize">placa<input required onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, placa: e.target.value.toUpperCase() }))} className="text-black rounded-xl ml-2  px-2" id="placa" name="placa" value={newVehicle.placa} /></label>
//       <label className="capitalize">modelo<input required onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, modelo: e.target.value }))} className="text-black rounded-xl ml-2 px-2" id="modelo" name="modelo" value={newVehicle.modelo} /></label>
//       <label className="capitalize">cor<input required onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, cor: e.target.value.toLowerCase() }))} className="text-black rounded-xl ml-2 px-2" id="cor" name="cor" value={newVehicle.cor} /></label>
//       <label className="capitalize">km<input type="number" required onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, km: Number(e.target.value) }))} className="text-black rounded-xl ml-2 px-2" id="km" name="km" value={newVehicle.km} /></label>
//       <div className="flex flex-wrap w-full justify-between">
//         <Button title="CANCELAR" type="button" onClick={() => {
//           setCreateNewVehicle(false)
//           setNewVehicle((newVehicle) => ({ ...newVehicle, cor: "", modelo: "", placa: "", km: 0 }))
//         }} />
//         <Button title="ADICIONAR" type="submit"
//           // onClick={() => {
//           //   setNewVehicle((newVehicle) => ({ ...newVehicle, cor: "", modelo: "", placa: "", km: 0 }))
//           // }}
//         />
//       </div>
//     </form>
//   )
// }

// export default Form

import { VehicleProps } from '@/app/page';
import Button from './Button';
import { Dispatch, FormEvent, SetStateAction } from 'react';

interface FormInterface {
  newVehicle: VehicleProps;
  setNewVehicle: Dispatch<SetStateAction<VehicleProps>>;
  handleSubmit: (e: FormEvent) => Promise<void>;
  setCreateNewVehicle: Dispatch<SetStateAction<boolean>>;
}

const initialVehicleState: VehicleProps = {
  placa: '',
  modelo: '',
  cor: '',
  km: 0,
  consumo: 0, // Add the missing properties
  categoria: '',
};

const Form = ({ newVehicle, setNewVehicle, handleSubmit, setCreateNewVehicle }: FormInterface) => {
  return (
    <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
      <div className="w-full">
        <h2 className="text-center">Novo Veículo</h2>
      </div>
      <label className="capitalize">
        placa
        <input
          required
          onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, placa: e.target.value.toUpperCase() }))}
          className="text-black rounded-xl ml-2  px-2"
          id="placa"
          name="placa"
          value={newVehicle.placa || ''}
        />
      </label>
      <label className="capitalize">
        modelo
        <input
          required
          onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, modelo: e.target.value }))}
          className="text-black rounded-xl ml-2 px-2"
          id="modelo"
          name="modelo"
          value={newVehicle.modelo || ''}
        />
      </label>
      <label className="capitalize">
        cor
        <input
          required
          onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, cor: e.target.value.toLowerCase() }))}
          className="text-black rounded-xl ml-2 px-2"
          id="cor"
          name="cor"
          value={newVehicle.cor || ''}
        />
      </label>
      <label className="capitalize">
        km
        <input
          type="number"
          required
          onChange={(e) => setNewVehicle((newVehicle) => ({ ...newVehicle, km: Number(e.target.value) }))}
          className="text-black rounded-xl ml-2 px-2"
          id="km"
          name="km"
          value={newVehicle.km || 0}
        />
      </label>
      <div className="flex flex-wrap w-full justify-between">
        <Button
          title="CANCELAR"
          type="button"
          onClick={() => {
            setCreateNewVehicle(false);
            setNewVehicle({ ...initialVehicleState }); // Reset to initial state
          }}
        />
        <Button title="ADICIONAR" type="submit" />
      </div>
    </form>
  );
};

export default Form;
