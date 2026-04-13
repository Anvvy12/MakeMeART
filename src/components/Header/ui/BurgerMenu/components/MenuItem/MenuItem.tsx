import React from 'react';

import cn from 'classnames';

import s from './MenuItem.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function MenuItem({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.MenuItem, className)} {...props}>
      {children}
    </div>
  );
}
