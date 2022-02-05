import { GetGamesItems } from 'core/store/games/games.actions';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader';

const Initializer: React.FC = ({children}) => {

  const dispatch = useDispatch();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {

    const onInit = async () => {
      await dispatch(GetGamesItems());
      setReady(true);
    };

    onInit().then();

  }, [])

  if (!ready) return (
    <div className='w-full h-screen flex items-center justify-center text-red-500'>
      <Loader size='xl' />
    </div>
  )

  return <>{children}</>;
};

export default Initializer;