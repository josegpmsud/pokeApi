import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [pokemon,setPokemon] = useState();
  const [nombrePokemon, setNombrePokemon] = useState('');

  //const obtenerPokemon = () => {
    
    axios.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}') // 


      .then(function (response) {
        console.log(response);
        //setPokemon(response.data);
      })
      .catch(function (error) {
        console.log(error);
        if(error){
          alert("No se encontro el poquemon intenta escribir el nombre correctamente") //https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={e920d87ad8a741b2e9c693a7d1e336a7}
        }
      })
      .finally(function () {
      })
//};
  return (
    <>
      <h1>clima</h1>
    </>
  )
}

export default App


/*


      <input placeholder='Ingrese el Nombre del pokemon' onChange={(e)=>setNombrePokemon(e.target.value)}></input>
    <button onClick={obtenerPokemon}>Buscar</button>
    { pokemon &&
      <>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.id}</h2>
        <img src={pokemon.sprites.front_shiny}></img>
        
      </>
    }
    



*/