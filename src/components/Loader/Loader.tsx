import { stringIf } from 'core/helpers/strings.helpers';
import React from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'primary' | 'white';

interface Props {
  readonly size?: Size;
  readonly variant?: Variant;
}

const Loader: React.FC<Props> = ({size = 'sm', variant = 'primary'}) => {
  return (
    <div className={`
      ${stringIf(size === 'xs', 'w-3 h-3')}
      ${stringIf(size === 'sm', 'w-4 h-4')}
      ${stringIf(size === 'md', 'w-6 h-6')}
      ${stringIf(size === 'lg', 'w-10 h-10')}
      ${stringIf(size === 'xl', 'w-16 h-16')}
      ${stringIf(variant === 'primary', 'text-red-500')}
      ${stringIf(variant === 'white', 'text-white')}
    `}>
      <svg className='animate-rotate' viewBox='25 25 50 50'>
        <circle
          r='20'
          cx='50'
          cy='50'
          fill='none'
          className='animate-dash stroke-current'
          strokeMiterlimit='10'
          strokeWidth={`
            ${stringIf(size === 'xs', '8')}
            ${stringIf(size === 'sm', '7')}
            ${stringIf(size === 'md', '6')}
            ${stringIf(size === 'lg', '5')}
            ${stringIf(size === 'xl', '4')}
          `} />
      </svg>
    </div>
  );
};

export default Loader;