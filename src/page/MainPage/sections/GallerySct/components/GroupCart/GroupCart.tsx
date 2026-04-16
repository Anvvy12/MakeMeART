import React from 'react';

import cn from 'classnames';

import s from './GroupCart.module.scss';
import Button from 'ui/Button';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  src: string;
  count: number;
  title: string;
}

export default function GroupCart({
  className = '',
  src,
  count,
  title,
  ...props
}: TProps) {
  return (
    <div className={cn(s.GroupCart, className)} {...props}>
      <div>
        <img src={src} alt={'Group Cart'} />
      </div>
      <h3>{title}</h3>
      <p>{count} pictures</p>
      <Button>View</Button>
    </div>
  );
}
