import React from 'react';

interface Props {
  readonly name: string;
  readonly iconURL: string;
  readonly imageURL: string;
}

const CardGame: React.FC<Props> = ({name, iconURL, imageURL}) => {
  return (
    <div className='relative w-full aspect-[16/9] rounded bg-white shadow hover:bg-red-500 transition-colors cursor-pointer group'>
      <div className='absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-10'/>
      <div className='absolute w-auto text-gray-800 uppercase text-xs font-semibold group-hover:text-white -right-8 bottom-2'>
        <div className='transform origin-top-left -rotate-90'>{name}</div>
      </div>
    </div>
  );
};

export default CardGame;