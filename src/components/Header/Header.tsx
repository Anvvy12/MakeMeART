import cn from 'classnames';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from 'ui/Logo';
import BurgerMenu from './ui/BurgerMenu';

export default function Header() {
  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <Logo />
        <BurgerMenu.Wrapper className={s.burgerMenu}>
          <BurgerMenu.MenuBtn />
          <BurgerMenu.Menu>
            <BurgerMenu.MenuItem>
              <Link to='/'>Main</Link>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <Link to='/gallery'>Gallery</Link>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <Link to='/about'>About</Link>
            </BurgerMenu.MenuItem>
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>
    </section>
  );
}
