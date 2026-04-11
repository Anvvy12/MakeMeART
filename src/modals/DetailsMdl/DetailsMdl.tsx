import React from 'react';

import cn from 'classnames';

import s from './DetailsMdl.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function DetailsMdl({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.DetailsMdl, className)} {...props}>
      {children}
    </div>
  );
}
