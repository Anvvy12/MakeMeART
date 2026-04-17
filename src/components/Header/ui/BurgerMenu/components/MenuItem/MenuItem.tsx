import React from 'react';

import cn from 'classnames';

import s from './MenuItem.module.scss';
import { useBurgerMenuCtx } from 'components/Header/ui/BurgerMenu/useBurgerMenuCtx';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function MenuItem({
  className = '',
  children,
  ...props
}: TProps) {
  const { setOpen } = useBurgerMenuCtx();

  return (
    <button
      className={cn(s.MenuItem, className)}
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </button>
  );
}
