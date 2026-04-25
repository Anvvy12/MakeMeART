import cn from 'classnames';

import s from './MainPage.module.scss';
import GallerySct from './sections/GallerySct';
import AboutSct from './sections/AboutSct';
import ArtSct from './sections/ArtSct';

export default function MainPage() {
  return (
    <main className={cn(s.MainPage)}>
      <AboutSct />
      <GallerySct />

      <ArtSct />
    </main>
  );
}
