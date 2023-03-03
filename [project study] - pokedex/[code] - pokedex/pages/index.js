import Link from 'next/link'
import React from 'react'


export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu ruim');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);

  return {
    props: {
      pokemons,
    },
  };
}


export default function Home(props) {

  const { pokemons } = props

  return (
    <div>
        <div className='navbar'>
            <h4>Pokedex Project</h4>
            <ul>
              <li> <Link href='/'><a>Home</a></Link></li>
              <li> <Link href='/about/'><a>About</a></Link></li>
            </ul>
        </div>

        <section>
          <ul>
            { pokemons.map((pokemon, id) => (
                <li key={id}>
                  <Link href={`/details/${pokemon.entry_number}`}><a>{pokemon.entry_number} - {pokemon.pokemon_species.name}</a></Link>
                </li>
            )) }            
          </ul>
        </section>        
    </div>
  )
}
