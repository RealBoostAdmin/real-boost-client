import React from 'react';
import {IProduct} from '../../core/models/product.model';
import {IGame} from '../../core/models/game.model';
import OwBronze from '../../assets/svg/ow-bronze';
import RangeSlider from '../../components/RangeSlider';

interface IProps {
    product: IProduct,
    game: IGame
}

const Rank: React.FC<IProps> = ({product, game}) => {
    console.log('====>', product, game)
    return (
        <>
        {/*OVERWATCH ===> RANK BOOSTING*/}
            {game.name === 'Overwatch' && product.name === 'Rank Boosting' && (
                <div className='relative w-full aspect-[16/9] rounded bg-white shadow transition-all text-gray-800'>
                    <div className="flex flex-row justify-around font-bold">
                        <div className="basis-[45%]">
                            <p className="my-3">Rang Actuel <span className="text-red-600">Bronze</span></p>
                            <div className="border-2 border-gray-100 mx-auto flex flex-col justify-between items-center p-3 rounded">
                                <OwBronze/>
                                <span className="text-red-600 mt-3 text-2xl">1465</span>
                            </div>
                        </div>
                        <div className="basis-[45%]">
                            <p className="my-3">Rang Actuel <span className="text-red-600">Gold</span></p>
                            <div className="border-2 border-gray-100 mx-auto flex flex-col justify-between items-center p-3 rounded">
                                <OwBronze/>
                                <span className="text-red-600 mt-3 text-2xl">2500</span>
                            </div>
                        </div>
                    </div>
                    <RangeSlider initialMin={1000} initialMax={2000} min={0} max={4500} step={10} priceCap={50}/>
                </div>
            )}
        </>
    )
}

export default Rank;
