import cn from 'classnames';

import s from './GallerySct.module.scss';
import GroupCart from './components/GroupCart';

export default function GallerySct() {
  return (
    <section className={cn(s.GallerySct)}>
      <h3>Gallery</h3>
      <div className={s.galleryContent}>
        <GroupCart src={''} count={12} title={'sdds'} />
      </div>
    </section>
  );
}
