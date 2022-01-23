import Container from 'components/Container';
import { Outlet } from 'react-router-dom';
import MainNav from 'components/MainNav';
import SideNav from 'components/SideNav';
import Footer from 'components/Footer';
import React from 'react';

const Layout: React.FC = () => {
  return (
    <div className='w-full'>
      <SideNav items={[]}/>
      <div className='pl-28 w-full flex flex-col min-h-screen'>
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