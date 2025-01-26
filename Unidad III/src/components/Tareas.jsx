import { useState } from "react";
import {tareasIniciales} from "../TareasIniciales";

const Tareas = () => {
  const [entrada, setEntrada] = useState("");
  const [tareas, setTareas] = useState(tareasIniciales);

  const capturaInput = (e) => {
    setEntrada(e.target.value);
    console.log(entrada);
  };  

  const enviarForm = (e) => {
    // e.preventDefault();
    setTareas([...tareas, { nombre: entrada, completada: false }]);
    setEntrada("");
  };

  const completarTarea = (tarea) => {
      const nuevasTareas = [...tareas];
      const index = nuevasTareas.findIndex(el => el.nombre === tarea.nombre)
      nuevasTareas[index].completada = true;
      setTareas(nuevasTareas);
  }

  const eliminarTarea = (tarea) => {
    const listaFiltrada = tareas.filter(el => el.nombre !== tarea.nombre);
    setTareas(listaFiltrada)
  }

  return (
    <>
      <input type="text" onChange={capturaInput} value={entrada}></input>
      <button onClick={enviarForm}>Agregar</button>
      <div className="Lista">
        <ul>
          {tareas.map((tarea) => (
            <li 
            key={tarea.nombre}
            style={tarea.completada === true ? { textDecoration:'line-through' } : {}}>
            {tarea.nombre}
            {tarea.completada === false ? <button onClick={()=> completarTarea(tarea)}>Completar</button>:''}
            <button onClick={() => eliminarTarea(tarea)} >Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tareas;
