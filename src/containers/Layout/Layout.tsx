import { GamesItems } from 'core/store/games/games.selectors';
import { useImage } from 'core/hooks/useImage';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import MainNav from 'components/MainNav';
import SideNav from 'components/SideNav';
import Footer from 'components/Footer';
import React from 'react';

const Layout: React.FC = () => {

  const image = useImage();
  const games = useSelector(GamesItems);

  const items = games.map(game => ({
    ...game,
    icon_url: image.getPublicUrl(game.icon_url, 'games') || '',
    image_url: image.getPublicUrl(game.image_url, 'games') || '',
    products: []
  }));

  return (
    <div className='w-full'>
      <div className='hidden lg:block'><SideNav items={items}/></div>
      <div className='lg:pl-28 w-full flex flex-col min-h-screen overflow-x-hidden'>
        <MainNav isAuthenticated={false}/>
        <main className='flex w-full flex-grow min-h-full bg-gray-50'>
          <Container>
            <Outlet/>
          </Container>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;