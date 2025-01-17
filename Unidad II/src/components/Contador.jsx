import { useState } from "react"


const Contador = () => {

    const [cuenta, setcuenta] = useState(0);

  return (
    <>
        <button onClick={() => setcuenta(cuenta + 1)}>Cuenta: {cuenta}</button>
    </>
  )
}

export default Contador