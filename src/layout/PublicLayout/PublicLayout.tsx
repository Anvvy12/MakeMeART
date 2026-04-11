import cn from 'classnames';

import s from './PublicLayout.module.scss';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <section className={cn(s.PublicLayout)}>
      <Header />
      <Outlet />
    </section>
  );
}
