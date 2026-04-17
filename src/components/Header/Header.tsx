import cn from 'classnames';
import s from './Header.module.scss';
import Logo from 'ui/Logo';
import BurgerMenu from './ui/BurgerMenu';
import { SECTIONS_CONSTANTS } from 'constants/SECTIONS_CONSTANTS';

export default function Header() {
  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <Logo />
        <nav className={s.nav}>
          <a className={s.link} href={SECTIONS_CONSTANTS.MAIN_SCT}>
            Main
          </a>
          <a className={s.link} href={SECTIONS_CONSTANTS.GALLERY_SCT}>
            Gallery
          </a>
          <a className={s.link} href={SECTIONS_CONSTANTS.ABOUT_SCT}>
            About
          </a>
        </nav>
        <BurgerMenu.Wrapper className={s.burgerMenu}>
          <BurgerMenu.MenuBtn />
          <BurgerMenu.Menu>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.MAIN_SCT}>
                Main
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.GALLERY_SCT}>
                Gallery
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.ABOUT_SCT}>
                About
              </a>
            </BurgerMenu.MenuItem>
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>
    </section>
  );
}
