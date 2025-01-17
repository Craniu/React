import {useState} from "react"

const myInput = () => {
    const [nombre, setNombre] =useState()

    const handleNombre = (e) => {
        console.log(e);
        setNombre(e.target.value)
    }
    const handleResult = () => console.log(`El nombre es: ${nombre}`)
  return (
    <div>
        <input 
        type="text"
        placeholder="Escribe tu nombre bacalao!"
        value={nombre}
        onChange={handleNombre}
        />
        <button onClick={handleResult}>Click</button>
    </div>
  )
}

export default myInput