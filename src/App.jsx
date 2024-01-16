import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetail } from './actions'
import { Searcher } from './components/Searcher'
import { Spinner } from './components/spinner'
import { PokemonList } from './components/PokemonList'
import { SunIcon } from '@heroicons/react/24/solid'
import { Col } from 'antd'
import logo from './assets/pokedux-logo.svg'
import './App.css'
import { getPokemons } from './api'

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() =>{
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetail(pokemonsRes));
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
          {loading ?
            <Spinner/> : <PokemonList pokemons={pokemons}/>
            }
    </div>
  )
}


export default App;
