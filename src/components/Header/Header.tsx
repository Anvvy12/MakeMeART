import cn from 'classnames';

import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className={cn(s.Header)}>
      <p>SophiaRoman</p>
      <nav className={s.nav}>
        <Link to='/'>Main</Link>
        <Link to='/gallery'>Gallery</Link>
      </nav>
    </section>
  );
}
