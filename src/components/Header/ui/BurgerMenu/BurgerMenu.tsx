import React from 'react';

import cn from 'classnames';

import s from './BurgerMenu.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function BurgerMenu({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.BurgerMenu, className)} {...props}>
      {children}
    </div>
  );
}
