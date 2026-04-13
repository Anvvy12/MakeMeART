import React from 'react';
import BurgerMenuIcon from 'svg/burger-menu-icon.svg?react';

import cn from 'classnames';

import s from './MenuBtn.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  icon?: React.ReactNode;
}

export default function MenuBtn({ className = '', icon, ...props }: TProps) {
  return (
    <div className={cn(s.MenuBtn, className)} {...props}>
      {icon ?? <BurgerMenuIcon />}
    </div>
  );
}
