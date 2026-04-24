import cn from 'classnames';

import s from './GallerySct.module.scss';
import GroupCart from './components/GroupCart';

export default function GallerySct() {
  return (
    <section className={cn(s.GallerySct)}>
      <h2 className={s.sectionTitle}>Gallery</h2>
      <div className={s.galleryContent}>
        <GroupCart
          src={'/src/assets/img/mans/borus.JPG'}
          count={5}
          title={'чоловіки'}
        />
        <GroupCart
          title={'рутина'}
          src={'/src/assets/img/rutine/loop.JPG'}
          count={2}
        />
        <GroupCart
          src={'/src/assets/img/NYPlankton/n_1_on_the_way.JPG'}
          count={5}
          title={'Новий рік офісного планктона'}
        />
        <GroupCart
          src={'/src/assets/img/napoleonsLife/IMG_5186.JPG'}
          count={8}
          title={'Наполеонівське життя'}
        />
      </div>
    </section>
  );
}
