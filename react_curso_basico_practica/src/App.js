import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [resultado, setResultado] = useState();

  const sumar = () => {
    setResultado(Number(n1) + Number(n2));
  };
  const modificar =(e)=>{
    setN1(e.target.value)
  }
  const modificar2 =(e)=>{
    setN2(e.target.value)
  }
  return (
    <div className="caja">
      <input type="number" value={n1} onChange={modificar} />+
      <input type="number" value={n2} onChange={modificar2}/>=
      <input type="number" value={resultado}readOnly />
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default App;
