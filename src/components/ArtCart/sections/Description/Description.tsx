import React from 'react';

import cn from 'classnames';

import s from './Description.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Description({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.Description, className)} {...props}>
      {children}
    </div>
  );
}
