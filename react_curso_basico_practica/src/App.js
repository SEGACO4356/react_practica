import React, { useState } from "react";
import "./App.css";

const App = () => {

  const rey=[
    {
    nombre: "Pirri",
    aficion: "Sisa",
    },{
      nombre: "nombre2",
      aficion: "nosesabe2",
    },{
      nombre: 
      "nombre3",
      aficion: "nosesabe3",
    }
  ]
  const [contador, setContador] = useState(0);
  const [mensaje, SetMensaje] = useState();
 const cambio = ()=>{
  setContador(contador+1);
  if (contador+1 >= rey.length) {
      setContador(0);
  }
  SetMensaje(<h2>Solo <span className="span">{rey[contador].nombre}</span>
  Si <span className="span2">{rey[contador].aficion}</span></h2>)
 }


  return (
   <>
   <button onClick={cambio}>Pase</button>
   <div>{mensaje}</div>
   </>
  );
};

export default App;
