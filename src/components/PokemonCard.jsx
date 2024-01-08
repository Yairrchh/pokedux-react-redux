import { StarIcon } from '@heroicons/react/24/solid'

// import { StarOutlined } from "@ant-design/icons";
// import { Card, Col } from "antd";
// import Meta from "antd/es/card/Meta";


const PokemonCard = ({name}) => {
    return (
        <div className='w-52 rounded-lg bg-gradient-to-b  from-gray-400 via-purple-400 to-green-400 transition-transform transform-gpu hover:scale-110 ease-out duration-300'>
            <div className='flex item-center justify-center mt-2'>
                <h1>{name}</h1>
                <StarIcon className='text-white w-5 h-5 relative left-14'/>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <figure className='w-48'>
                    <img className='w-full h-full rounded-full bg-blue-200 object-cover' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png"alt='Ditto'/>
                </figure>
            </div>
            <div className='flex items-center justify-center'>
                <p>fire magic</p>
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