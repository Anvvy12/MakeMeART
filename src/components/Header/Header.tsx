import cn from 'classnames';
import s from './Header.module.scss';
import Logo from 'ui/Logo';
import BurgerMenu from './ui/BurgerMenu';
import { SECTIONS_CONSTANTS } from 'constants/SECTIONS_CONSTANTS';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation(undefined, { keyPrefix: 'common.nav' });

  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <Logo />
        <nav className={s.nav}>
          <a className={s.link} href={SECTIONS_CONSTANTS.MAIN_SCT}>
            {t('main')}
          </a>
          <a className={s.link} href={SECTIONS_CONSTANTS.GALLERY_SCT}>
            {t('gallery')}
          </a>
          <a className={s.link} href={SECTIONS_CONSTANTS.ABOUT_SCT}>
            {t('about')}
          </a>
        </nav>
        <BurgerMenu.Wrapper className={s.burgerMenu}>
          <BurgerMenu.MenuBtn />
          <BurgerMenu.Menu>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.MAIN_SCT}>
                {t('main')}
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.GALLERY_SCT}>
                {t('gallery')}
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.ABOUT_SCT}>
                {t('about')}
              </a>
            </BurgerMenu.MenuItem>
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>
    </section>
  );
}
