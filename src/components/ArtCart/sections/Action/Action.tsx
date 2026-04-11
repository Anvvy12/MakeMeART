import React from 'react';

import cn from 'classnames';

import s from './Action.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Action({ className = '', children, ...props }: TProps) {
  return (
    <div className={cn(s.Action, className)} {...props}>
      {children}
    </div>
  );
}
