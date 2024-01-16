import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'

// import { StarOutlined } from "@ant-design/icons";
// import { Card, Col } from "antd";
// import Meta from "antd/es/card/Meta";


const PokemonCard = ({name, image, types, id, isFavorite}) => {

    const dispatch = useDispatch()

    const isFavoriteButton = () => {
        dispatch(setFavorite({pokemonId: id}));
    }

    const renderAbility = (types) => {
        return types.map(type => type.type.name).join(', ')
    }

    return (
        <div className='w-56 rounded-lg bg-gradient-to-b  from-gray-400 via-purple-400 to-green-400
            transition-transform transform-gpu hover:scale-110 ease-out duration-300'>
            <div className='flex item-center justify-center mt-2'>
                <h1>{name}</h1>
                <button onClick={isFavoriteButton}>
                    <StarIcon className={` w-5 h-5 absolute right-0 top-0 m-1
                        ${isFavorite ? `black-white` : `text-white`} `}/>
                </button>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <figure className='w-48 h-48'>
                    <img className='w-full h-full rounded-full bg-blue-200 overflow-visible' src={image}
                        alt={image.name}/>
                </figure>
            </div>
            <div className='flex justify-center items-center m-2'>
                <h1 className='mr-3'>Ability:</h1>
                <p>{renderAbility(types)}</p>
            </div>
        </div>
    )
}

export {PokemonCard};


{/* <Card className="w-52"
cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png"
alt='Ditto'/>}
extra={<StarOutlined/>}
>
    <Col span={16} offset={8}>
        <Meta  title={name} description='Fire Magic'/>
    </Col>
</Card> */}