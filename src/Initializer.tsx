import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';

const Initializer: React.FC = ({children}) => {

  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 3000);
  }, [])

  if (!ready) return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Loader size='xl'/>
    </div>
  )

  return <>{children}</>;
};

export default Initializer;