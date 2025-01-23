import { useState } from "react";
import TareasIniciales from "../TareasIniciales"

const Tareas = () => {

  const [entrada,setEntrada] = useState("");
  const [tareas,setTareas] = useState(TareasIniciales);

  const capturaInput = (e) =>{
      setEntrada(e.target.value);
      console.log(entrada);
  }

  const enviarForm = (e) => {
    // e.preventDefault();
    setTareas([...tareas,{nombre:entrada,completada:false}]);
    setEntrada("");
  }


  return (
  <>
    {/* <form onSubmit={enviarForm}>
      <input type="text" onChange={capturaInput} value={entrada}></input>
      <button>Agregar</button>
    </form> */}
    <input type="text" onChange={capturaInput} value={entrada}></input>
    <button onClick={enviarForm}>Agregar</button>
    <div className="Lista">
    <ul>
      {tareas.map(tarea => <li key={tarea}>{tarea}</li>)}
    </ul>
    </div>
  </>
  )
}

export default Tareas;
