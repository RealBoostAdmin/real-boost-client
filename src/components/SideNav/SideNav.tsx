import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import React from 'react';

interface Props {
  readonly items: ItemProps[];
}

interface ItemProps {
  readonly name: string;
  readonly icon_url: string;
  readonly image_url: string;
  readonly products: ProductProps[];
}

interface ProductProps {
  readonly name: string;
  readonly href: string;
}

const SideNav: React.FC<Props> = ({items}) => {
  return (
    <div className='fixed z-20 w-28 h-screen top-0 left-0 bg-gray-900 flex justify-center flex-col'>
      {items.map((item, i) => <SideNavItem key={i} {...item} />)}
    </div>
  );
};

const SideNavItem: React.FC<ItemProps> = ({name, icon_url, image_url, products}) => {
  return (
    <div className='h-32 text-white w-full flex flex-col items-center justify-center gap-2 select-none cursor-pointer opacity-40 hover:opacity-100 hover:bg-red-500 transition-all'>
      <ReactSVG src={icon_url} className='fill-current' />
      <div className='text-xs uppercase'>{name}</div>
      <div className='hidden'>
        <img alt={name} src={image_url} />
        {products.map((product, i) => <SideNavProduct key={i} {...product} />)}
      </div>
    </div>
  );
};

const SideNavProduct: React.FC<ProductProps> = ({name, href}) => {
  return (
    <NavLink to={href}>
      <div>{name}</div>
    </NavLink>
  );
};

export default SideNav;