import { useState, useEffect } from 'react'
import axios from 'axios'
import ApiClime from './components/apiClime/ApiClime'
import ListCard from './components/listCard/ListCard';

function App() {

  const [pokemon,setPokemon] = useState();
  const [nombrePokemon, setNombrePokemon] = useState('');

  const obtenerPokemon = () => {axios.get('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon)
      .then(function (response) {
        console.log(response.data);
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log(error);
        if(error){
          alert("No se encontro el poquemon intenta escribir el nombre correctamente")
        }
      })
      .finally(function () {
      })
};
  return (
    <>
    <input placeholder='Ingrese el Nombre del pokemon' onChange={(e)=>setNombrePokemon(e.target.value)}></input>

    { pokemon &&
      <>
        <ApiClime></ApiClime>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.id}</h2>
        <img src={pokemon.sprites.front_shiny}></img>
        <ListCard></ListCard>

      </>
    }
    </>
  )
}

export default App
