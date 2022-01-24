import { ReactSVG } from 'react-svg'
import React from 'react';

interface Props {
  readonly name: string;
  readonly iconURL: string | null;
  readonly imageURL: string | null;
}

const CardGame: React.FC<Props> = ({name, iconURL, imageURL}) => {

  return (
    <div className='relative w-full aspect-[16/9] rounded bg-white shadow hover:bg-red-500 transition-all cursor-pointer text-gray-800 hover:text-white hover:shadow-lg'>
      <div className='absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-10'/>
      <div className='absolute whitespace-nowrap w-0 uppercase text-xs font-bold group-hover:text-white right-11 bottom-2 transform origin-top-left -rotate-90'>{name}</div>
      {imageURL && <img alt={name} src={imageURL} className='absolute w-full bottom-0 left-0' />}
      {iconURL && <ReactSVG src={iconURL} className='absolute top-4 right-4 fill-current' />}
    </div>
  );
};

export default CardGame;