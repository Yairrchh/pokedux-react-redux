import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setPokemons as setPokemonsActions } from './actions'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { SunIcon } from '@heroicons/react/24/solid'
import { Col } from 'antd'
import logo from './assets/pokedux-logo.svg'
import './App.css'
import { getPokemons } from './api'

function App({pokemons, setPokemons}) {


  useEffect(() =>{
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes)
    };
    fetchPokemons();
  }, []);

  return (
    <div className='App'>
        <nav className='flex items-center justify-between py-5 mb-5 bg-slate-600'>
          <img className='w-48 mx-10' src={logo} alt='pokedux'/>
          <div className='Sun-icon flex items-center justify-center gap-1 mx-10'>
            <p className='P-mode text-white font-light text-xs'>Light Mode</p>
            <SunIcon className='text-white w-8 h-8'/>
          </div>
        </nav>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        <PokemonList pokemons={pokemons}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
})

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectApp;
