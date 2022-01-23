import React from 'react';

interface Props {
  readonly name: string;
  readonly iconURL: string;
  readonly imageURL: string;
}

const CardGame: React.FC<Props> = ({name, iconURL, imageURL}) => {
  return (
    <div className='w-full aspect-[16/8] rounded bg-red-500 shadow'>
      {name}
    </div>
  );
};

export default CardGame;