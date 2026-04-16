import React from 'react';

import cn from 'classnames';

import s from './Footer.module.scss';
import Logo from 'ui/Logo';
import { Link } from 'react-router-dom';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', ...props }: TProps) {
  return (
    <div className={cn(s.Footer, className)} {...props}>
      <Logo />
      <nav className={s.navList}>
        <Link to='/'>Main</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/about'>About</Link>
      </nav>
    </div>
  );
}
