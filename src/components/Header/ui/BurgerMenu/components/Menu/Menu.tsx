import React from 'react';

import cn from 'classnames';

import s from './Menu.module.scss';
import { useBurgerMenuCtx } from '../../useBurgerMenuCtx';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Menu({ className = '', children, ...props }: TProps) {
  const { open } = useBurgerMenuCtx();

  return (
    <div className={cn(s.Menu, { [s.open]: open }, className)} {...props}>
      {children}
    </div>
  );
}
