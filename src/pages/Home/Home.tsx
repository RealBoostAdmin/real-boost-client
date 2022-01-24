import React, { useEffect, useState } from 'react';
import CardGame from '../../components/CardGame/CardGame';
import SliderCards from '../../components/SliderCards';
import { supabase } from '../../core/supabase';
import { IGame } from '../../core/models/game.model';
import { useImage } from '../../core/hooks/useImage';

const Home: React.FC = () => {

  const [games, setGames] = useState<IGame[]>([]);
  const image = useImage();

  useEffect(() => {
    supabase
      .from('games')
      .select('*')
      .then(({data}) => setGames(data as IGame[]));
  }, [])

  return (
    <>
      <div className='w-full py-10 h-[calc(100vh-6rem)] flex flex-col justify-end'>
        <h1 className='mt-5 max-w-2xl'>Voluptatem accusantium doloremque <span className='text-red-500'>laudantium</span></h1>
        <p className='mt-10 mb-20 max-w-xl'>Quality Boosting in 15 Games width Various Features Including 24/7 Live Support will deliver you an Unique Experience</p>
        <SliderCards>
          {games.map((game, i) => (
            <div key={i} className='w-full md:w-1/2 xl:w-1/3 shrink-0'>
              <CardGame name={game.name} iconURL={image.getPublicUrl(game.icon_url, 'games')} imageURL={image.getPublicUrl(game.image_url, 'games')}/>
            </div>
          ))}
        </SliderCards>
      </div>
    </>
  );
};

export default Home;