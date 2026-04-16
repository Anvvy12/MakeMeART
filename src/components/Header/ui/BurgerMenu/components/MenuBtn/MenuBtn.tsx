import React from 'react';
import Hamburger from 'hamburger-react';
import cn from 'classnames';

import s from './MenuBtn.module.scss';

import { useBurgerMenuCtx } from '../../useBurgerMenuCtx';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  className?: string;
  icon?: React.ReactNode;
}

export default function MenuBtn({ className = '', icon, ...props }: TProps) {
  const { setOpen } = useBurgerMenuCtx();

  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className={cn(s.MenuBtn, className)}
      {...props}
    >
      {icon ?? <Hamburger />}
    </button>
  );
}
