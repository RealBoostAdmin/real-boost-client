import React from 'react';
import Container from '../Container';

interface Props {
  readonly isAuthenticated: boolean;
}

// noinspection JSUnusedLocalSymbols
const MainNav: React.FC<Props> = ({isAuthenticated}) => {
  return (
    <div className='h-24 flex items-center'>
      <Container>
        <div className='flex items-center justify-between'>
          <span>Logo</span>
          <div className='flex items-center gap-10'>
            <span>Comment ça marche ?</span>
            <span>Les boosters</span>
            <span>Mon compte</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainNav;