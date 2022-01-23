import React from 'react';
import CardGame from '../../components/CardGame/CardGame';
import SliderCards from '../../components/SliderCards';

const Home: React.FC = () => {
  return (
    <>
      <div className='w-full py-10 h-[calc(100vh-6rem)] flex flex-col justify-end'>
        <h1 className='mt-5 max-w-2xl'>Voluptatem accusantium doloremque <span className='text-red-500'>laudantium</span></h1>
        <p className='mt-10 mb-20 max-w-xl'>Quality Boosting in 15 Games width Various Features Including 24/7 Live Support will deliver you an Unique Experience</p>
        <SliderCards>
          <div className='w-full md:w-1/3 shrink-0'>
            <CardGame name='overwatch' iconURL='' imageURL=''/>
          </div>
          <div className='w-full md:w-1/3 shrink-0'>
            <CardGame name='overwatch' iconURL='' imageURL=''/>
          </div>
          <div className='w-full md:w-1/3 shrink-0'>
            <CardGame name='overwatch' iconURL='' imageURL=''/>
          </div>
          <div className='w-full md:w-1/3 shrink-0'>
            <CardGame name='overwatch' iconURL='' imageURL=''/>
          </div>
          <div className='w-full md:w-1/3 shrink-0'>
            <CardGame name='overwatch' iconURL='' imageURL=''/>
          </div>
          <div className='w-full md:w-1/3 shrink-0'>
            <CardGame name='overwatch' iconURL='' imageURL=''/>
          </div>
        </SliderCards>
      </div>
    </>
  );
};

export default Home;