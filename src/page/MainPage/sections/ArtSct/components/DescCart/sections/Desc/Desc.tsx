import React from 'react';

import cn from 'classnames';

import s from './Desc.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Desc({ className = '', children, ...props }: TProps) {
  return (
    <div className={cn(s.Desc, className)} {...props}>
      {children}
    </div>
  );
}
