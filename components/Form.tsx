import Button from './Button'

const Form = ({ newVehicle, setNewVehicle, handleSubmit, setCreateNewVehicle }) => {

  return (
    <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
      <div className='w-full'>
        <h2 className="text-center">Novo Veículo</h2>
      </div>
      <label className="capitalize">placa<input onChange={(e) => setNewVehicle({ ...newVehicle, placa: e.target.value.toUpperCase() })} className="text-black rounded-xl ml-2  px-2" id="placa" name="placa" value={newVehicle.placa} /></label>
      <label className="capitalize">modelo<input onChange={(e) => setNewVehicle({ ...newVehicle, modelo: e.target.value })} className="text-black rounded-xl ml-2 px-2" id="modelo" name="modelo" value={newVehicle.modelo} /></label>
      <label className="capitalize">cor<input onChange={(e) => setNewVehicle({ ...newVehicle, cor: e.target.value.toLowerCase() })} className="text-black rounded-xl ml-2 px-2" id="cor" name="cor" value={newVehicle.cor} /></label>
      <div className="flex flex-wrap w-full justify-between">
        <Button title="CANCELAR" type="button" onClick={() => {setCreateNewVehicle(false)}} />
        <Button title="ADICIONAR" type="submit" />
      </div>
    </form>
  )
}

export default Form