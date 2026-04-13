import React from 'react';

import cn from 'classnames';

import s from './Menu.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Menu({ className = '', children, ...props }: TProps) {
  return (
    <div className={cn(s.Menu, className)} {...props}>
      {children}
    </div>
  );
}
