import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [meme, setMeme] = useState([])
  const otro = () =>{

  const url="https://api.imgflip.com/get_memes";
  const peticion = fetch(url);
  peticion
  .then(datos => datos.json())
  .then((lectura)=> console.log(lectura.data.memes.map( memes => 
  setMeme(e =>[...e,<div key={memes.memes}>{memes.id} {memes.name}</div>
  ]
  )
  )
  )
  )
  .catch(console.log("Se ha producido un error"))
  }

useEffect(()=>{
    otro();
}, [])

  return (

  <>
  <h1>Memes: </h1>
  {
    meme
  }
  </>
  );
}

export default App;
