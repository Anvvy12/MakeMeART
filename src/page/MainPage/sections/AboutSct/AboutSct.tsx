import cn from 'classnames';

import s from './AboutSct.module.scss';
import DescriptionSct from './DescriptionSct';
import ArtistSct from './ArtistSct';

export default function AboutSct() {
  return (
    <section className={cn(s.AboutSct)}>
      <DescriptionSct />
      <ArtistSct />
    </section>
  );
}
