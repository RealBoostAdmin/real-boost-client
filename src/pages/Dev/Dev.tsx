import Container from 'components/Container';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader';
import Button from 'lib/Button';
import React from 'react';

const Dev: React.FC = () => {

  const onClick = () => console.log('Clicked');

  if (process.env.NODE_ENV !== 'development') return <Navigate to='/' />;

  return (
    <Container>
      <div className='mt-20 grid grid-cols-10 items-center gap-6'>
        <p>H1</p>
        <h1 className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
        <p>H2</p>
        <h2 className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</h2>
        <p>H3</p>
        <h3 className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</h3>
        <p>H4</p>
        <h4 className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</h4>
        <p>H5</p>
        <h5 className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</h5>
        <p>H6</p>
        <h6 className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</h6>
        <p>p</p>
        <p className='col-span-9'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
      </div>

      <div className='mt-20 flex gap-6 flex-col md:flex-row'>
        <Button onClick={onClick}>primary filled</Button>
        <Button onClick={onClick} variant='secondary'>secondary filled</Button>
        <Button onClick={onClick} style='outlined'>primary outlined</Button>
        <Button onClick={onClick} variant='secondary' style='outlined'>secondary outlined</Button>
      </div>

      <div className='mt-6 flex gap-6 flex-col md:flex-row'>
        <Button loading>primary filled</Button>
        <Button loading variant='secondary'>secondary filled</Button>
        <Button loading style='outlined'>primary outlined</Button>
        <Button loading variant='secondary' style='outlined'>secondary outlined</Button>
      </div>

      <div className='mt-20 grid grid-cols-5 items-center gap-2'>
        <div className='w-full flex justify-center'><Loader size='xs'/></div>
        <div className='w-full flex justify-center'><Loader size='sm'/></div>
        <div className='w-full flex justify-center'><Loader size='md'/></div>
        <div className='w-full flex justify-center'><Loader size='lg'/></div>
        <div className='w-full flex justify-center'><Loader size='xl'/></div>
        <div className='w-full flex justify-center'><p>xs</p></div>
        <div className='w-full flex justify-center'><p>sm</p></div>
        <div className='w-full flex justify-center'><p>md</p></div>
        <div className='w-full flex justify-center'><p>lg</p></div>
        <div className='w-full flex justify-center'><p>xl</p></div>
      </div>
    </Container>
  );
};

export default Dev;