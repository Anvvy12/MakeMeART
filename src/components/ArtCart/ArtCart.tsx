import React from 'react';

import cn from 'classnames';

import s from './ArtCart.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function ArtCart({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.ArtCart, className)} {...props}>
      {children}
    </div>
  );
}
