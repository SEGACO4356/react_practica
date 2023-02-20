import React, { useState } from "react";
import "./App.css";

const App = () => {
  const plata = [
    {
      moneda: "euro",
      cambio: 1,
    },
    {
      moneda: "peso colombiano",
      cambio: 5248.08,
    },
    {
      moneda: "peso argentino",
      cambio: 206,
    },
    {
      moneda: "peso mexicano",
      cambio: 19,
    },
  ];

  
  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);

    const modificar=(e)=>{
      setCantidad(e.target.value);
      setResultado1(e.target.value*plata[1].cambio)
      setResultado2(e.target.value*plata[2].cambio)
      setResultado3(e.target.value*plata[3].cambio)
    }


  return (
    <>
      <div className="box">
        <label className="label" htmlFor="a">
          {plata[0].moneda}
        </label>
        <input className="input" id="a" type="number" value={cantidad} onChange={modificar}></input>

        <label className="label" htmlFor="a1">
          {plata[1].moneda}
        </label>
         <input className="input"  id="a1" type="number" value={resultado1} onChange={modificar}></input>
       
        <label className="label" htmlFor="a2">
          {plata[2].moneda}
        </label>
        <input className="input"  id="a2" type="number" value={resultado2} onChange={modificar}></input>

        <label className="label" htmlFor="a3">
          {plata[3].moneda}
        </label>
        <input className="input" id="a3" type="number" value={resultado3} onChange={modificar}></input>
        
      </div>
    </>
  );
};

export default App;
