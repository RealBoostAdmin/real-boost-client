import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetProductsItems} from '../../core/store/products/products.actions';
import {useNavigate, useParams} from 'react-router-dom';
import {GameSelected, GamesItems} from '../../core/store/games/games.selectors';
import {IGame} from '../../core/models/game.model';
import {ProductsItems} from '../../core/store/products/products.selectors';
import Tab from '../../components/Tab/Tab';
import {IProduct} from '../../core/models/product.model';
import Rank from './Rank';
import Options from './Options/Options';
import Extras from './Extras/Extras';

const Game: React.FC = () => {

    const [openTab, setOpenTab] = useState<number>(1);
    const {gameName} = useParams();
    const dispatch = useDispatch();
    const games = useSelector(GamesItems);
    const gameSelected: IGame = useSelector((state => GameSelected(state, gameName)));
    const products = useSelector(ProductsItems);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const game: IGame | undefined = games.find((game: IGame) => game.name.toLowerCase() === gameName?.toLowerCase());
                console.log(game, products);
                if (game && products[0]?.game_id !== game.id) dispatch(GetProductsItems(game.id));
                if (products.length === 0) navigate('/')
            } catch (error) {
            }
        };

        loadProducts();
    }, [])

    return (
        <div className="container">
            <h1>{gameName?.toUpperCase()}</h1>
            <Tab setOpenTab={setOpenTab} products={products}/>
            <div id="myTabContent">
                {products && products.map((product: IProduct, index: number) =>
                    <>
                        <div
                            className={`${openTab === (index + 1) ? 'block' : 'hidden'} p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
                            id={`link${index + 1}`}
                            role="tabpanel"
                            aria-labelledby="profile-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{product.name}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="basis-[60%]">
                                <Rank product={product} game={gameSelected}/>
                                <Options product={product}/>
                            </div>
                            <div className="basis-[30%] relative w-full aspect-[16/9] rounded bg-white shadow transition-all cursor-pointer text-gray-800">
                                <Extras product={product}/>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Game;
