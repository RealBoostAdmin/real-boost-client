import { GamesItems } from 'core/store/games/games.selectors';
import CardGame from 'components/CardGame/CardGame';
import SliderCards from 'components/SliderCards';
import { useImage } from 'core/hooks/useImage';
import { useSelector } from 'react-redux';
import React from 'react';

const Home: React.FC = () => {

  const image = useImage();
  const games = useSelector(GamesItems);

  const items = games.map(game => ({
    ...game,
    icon_url: image.getPublicUrl(game.icon_url, 'games') || '',
    image_url: image.getPublicUrl(game.image_url, 'games') || '',
    products: []
  }));

  return (
    <>
      <div className='w-full py-10 h-[calc(100vh-6rem)] flex flex-col justify-end'>
        <h1 className='mt-5 max-w-2xl'>Voluptatem accusantium doloremque <span className='text-red-500'>laudantium</span></h1>
        <p className='mt-10 mb-20 max-w-xl'>Quality Boosting in 15 Games width Various Features Including 24/7 Live Support will deliver you an Unique Experience</p>
        <SliderCards>
          {items.map((item, i) => (
            <div key={i} className='w-full md:w-1/2 xl:w-1/3 shrink-0'>
              <CardGame name={item.name} icon_url={item.icon_url} image_url={item.image_url}/>
            </div>
          ))}
        </SliderCards>
      </div>
    </>
  );
};

export default Home;