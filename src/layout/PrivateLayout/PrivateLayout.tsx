import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import s from './PrivateLayout.module.scss';
import Header from '../../components/Header';

export default function PrivateLayout() {
  return (
    <section className={cn(s.PrivateLayout)}>
      <Header />
      <Outlet />
    </section>
  );
}
