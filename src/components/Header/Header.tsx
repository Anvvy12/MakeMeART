import cn from 'classnames';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from 'img/Logo.png';

export default function Header() {
  return (
    <section className={cn(s.Header)}>
      <img className={s.logo} src={Logo} alt={'logo'} />
      <nav className={s.nav}>
        <Link to='/'>Main</Link>
        <Link to='/gallery'>Gallery</Link>
      </nav>
    </section>
  );
}
