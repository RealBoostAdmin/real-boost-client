import { stringIf } from 'core/helpers/strings.helpers';
import Loader from 'components/Loader';
import React from 'react';

type Type = 'button' | 'submit';
type Style = 'filled' | 'outlined';
type Variant = 'primary' | 'secondary';

interface Props {
  readonly type?: Type;
  readonly style?: Style;
  readonly loading?: boolean;
  readonly variant?: Variant;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
}

const Button: React.FC<Props> = ({
  loading,
  onClick,
  children,
  disabled,
  type = 'submit',
  style = 'filled',
  variant = 'primary',
}) => {

  const isFilled = () => style === 'filled';
  const isOutlined = () => style === 'outlined';
  const isPrimary = () => variant === 'primary';
  const isSecondary = () => variant === 'secondary';

  return (
    <button
      type={type}
      className={`
        w-full h-12 px-6 rounded transition-all flex items-center justify-center

        ${stringIf(!!disabled && isFilled(), 'bg-gray-200 text-white')}
        ${stringIf(!disabled && isFilled() && isPrimary(), 'bg-red-500 text-white hover:bg-red-400')}
        ${stringIf(!disabled && isFilled() && isSecondary(), 'bg-gray-800 text-white hover:bg-gray-900')}
        
        ${stringIf(!!disabled && isOutlined(), 'border border-gray-200 text-gray-300')}
        ${stringIf(!disabled && isOutlined() && isPrimary(), 'border border-red-500 text-red-500 hover:border-red-400')}
        ${stringIf(!disabled && isOutlined() && isSecondary(), 'border border-gray-800 text-gray-800 hover:border-gray-900')}
      `}
      onClick={() => !disabled && !loading && onClick?.()}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
