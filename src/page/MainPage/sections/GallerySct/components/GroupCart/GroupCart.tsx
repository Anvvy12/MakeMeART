import React from 'react';

import cn from 'classnames';

import s from './GroupCart.module.scss';
import Button from 'ui/Button';
import { useTranslation } from 'react-i18next';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  src: string;
  count: number;
  title: string;
}

export default function GroupCart({
  className = '',
  src,
  count,
  title,
  ...props
}: TProps) {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'page.main.gallery_sct.card',
  });

  return (
    <div className={cn(s.GroupCart, className)} {...props}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={src} alt={t('img_alt')} />
        <Button className={s.btn}>{t('view_btn')}</Button>
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.count}>{t('paintings_count', { count })}</p>
    </div>
  );
}
