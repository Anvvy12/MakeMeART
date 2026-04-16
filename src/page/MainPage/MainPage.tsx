import cn from 'classnames';

import s from './MainPage.module.scss';
import AboutSct from './sections/AboutSct';
import GallerySct from './sections/GallerySct';

export default function MainPage() {
  return (
    <main className={cn(s.MainPage)}>
      <AboutSct />
      <GallerySct />
    </main>
  );
}
