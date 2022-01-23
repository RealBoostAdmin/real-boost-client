import React from 'react';

type Type = 'button' | 'submit';
type Style = 'filled' | 'outlined';
type Variant = 'primary' | 'secondary';

interface Props {
  readonly type?: Type;
  readonly style?: Style;
  readonly variant?: Variant;
  readonly onClick?: () => void;
}

const Button: React.FC<Props> = ({type = 'submit', style = 'filled', variant = 'primary', onClick, children }) => {

  const classes = ["w-full h-12 px-6 rounded transition-colors"];

  if (style === 'filled') {
    if (variant === 'primary') classes.push('bg-red-500 text-white hover:bg-red-400');
    if (variant === 'secondary') classes.push('bg-gray-800 text-white hover:bg-gray-900');
  } else if (style === 'outlined') {
    if (variant === 'primary') classes.push('border border-red-500 text-red-500 hover:border-red-400');
    if (variant === 'secondary') classes.push('border border-gray-800 text-gray-800 hover:border-gray-900');
  }
  
  return (
    <button type={type} className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
