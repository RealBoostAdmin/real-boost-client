import { NavLink } from 'react-router-dom';
import React from 'react';

interface Props {
  readonly items: ItemProps[];
}

interface ItemProps {
  readonly name: string;
  readonly iconURL: string;
  readonly imageURL: string;
  readonly products: ProductProps[];
}

interface ProductProps {
  readonly name: string;
  readonly href: string;
}

const SideNav: React.FC<Props> = ({items}) => {
  return (
    <div>
      {items.map((item, i) => <SideNavItem key={i} {...item} />)}
    </div>
  );
};

const SideNavItem: React.FC<ItemProps> = ({name, iconURL, imageURL, products}) => {
  return (
    <div>
      <div>{name}</div>
      <img alt={name} src={iconURL} />
      <div>{name}</div>
      <div>
        <img alt={name} src={imageURL} />
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