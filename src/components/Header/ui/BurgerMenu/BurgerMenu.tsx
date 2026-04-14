import React, { useState } from 'react';

import cn from 'classnames';
import { BurgerMenuCtx } from './BurgerMenuCtx';
import s from './BurgerMenu.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function BurgerMenu({
  className = '',
  children,
  ...props
}: TProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BurgerMenuCtx.Provider value={{ open, setOpen }}>
      <div className={cn(s.BurgerMenu, className)} {...props}>
        {children}
      </div>
    </BurgerMenuCtx.Provider>
  );
}
