import React from 'react';

import cn from 'classnames';

import s from './Content.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Content({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.Content, className)} {...props}>
      {children}
    </div>
  );
}
