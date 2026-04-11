import cn from 'classnames';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from 'ui/Logo';

export default function Header() {
  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <Logo />
        <nav className={s.nav}>
          <Link to='/'>Main</Link>
          <Link to='/gallery'>Gallery</Link>
        </nav>
      </div>
    </section>
  );
}
