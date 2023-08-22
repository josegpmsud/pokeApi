
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../card/Card';

function ListCard() {

  const [pokemon,setPokemon] = useState();
  const [nombrePokemon, setNombrePokemon] = useState('');

  const obtenerPokemon = () => {axios.get('https://pokeapi.co/api/v2/pokemon/')
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

    { pokemon &&
      <>
        <Card
        id={pokemon.id}
        nombre={pokemon.name}
        src={pokemon.sprites.front_shiny}>
        </Card>

      </>
    }
    </>
  )
}

export default ListCard







