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
      <div className={s.imgWrapper}>
        <div className={s.img} style={{ backgroundImage: `url(${src})` }} />
        <Button className={s.btn}>переглянути</Button>
      </div>

      <h3 className={s.title}>{title}</h3>
      <p className={s.count}>{count} картин</p>
    </div>
  );
}
