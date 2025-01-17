import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault()
    if (nombre === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <div>
        <h3>El nombre es : {nombre}</h3>
      </div>
      <form onSubmit={submit}>
        {error ? <p className="error">Debes ingresar un nombre!</p> : null}
        <input onChange={handleChange} name="Nombre" />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
