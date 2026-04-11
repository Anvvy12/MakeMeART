import cn from 'classnames';
import s from './ArtistSct.module.scss';

export default function ArtistSct() {
  return (
    <section className={cn(s.ArtistSct)}>
      <div className={s.imgWrapper}></div>
    </section>
  );
}
