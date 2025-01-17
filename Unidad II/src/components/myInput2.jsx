import { useState } from "react"


const myInput2 = () => {

    // const [nombre, setNombre] =useState('')
    // const [apellido, setApellido] = useState('')
    // const [pass, setPass] = useState('')

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        pass: ''
    })

    const handleChange = (e) => {
        setUser({[e.target.name]: [e.target.value]})
    }

  return (
    <>
    <div>myInput2</div>
    <input
        type="text"
        placeholder="Escribe tu nombre:"
        name="nombre"
        value={user.nombre}
        onChange=''
    />
    <input
        type="text"
        placeholder="Escribe tu nombre:"
        value={user.apellido}
        onChange=''
        name="apellido"
    />
     <input
        type="text"
        placeholder="Escribe tu nombre:"
        value={user.pass}
        onChange=''
        name= "pass"
    />
    <button onClick={handleChange()}>Click</button>
    </>
  )
}

export default myInput2