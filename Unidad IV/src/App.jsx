import React, { useEffect, useRef } from "react";

const App = () => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  },[])


  return (
    <>
      <h1>Ejemplo useRef - Focus automático</h1>
      <input type="text" placeholder="Nombre" ref={inputRef}/>
      <input type="text" placeholder="Correo electrónico" />
      <input type="text" placeholder="Teléfono" />
    </>
  );
};

export default App;
