import React from 'react';

import cn from 'classnames';

import s from './Footer.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', children, ...props }: TProps) {
  return (
    <div className={cn(s.Footer, className)} {...props}>
      {children}
    </div>
  );
}
