import cn from 'classnames';

import s from './GallerySct.module.scss';
import GroupCart from './components/GroupCart';
import { useTranslation } from 'react-i18next';

export default function GallerySct() {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'page.main.gallery_sct',
  });

  return (
    <section className={cn(s.GallerySct)}>
      <h2 className={s.sectionTitle}>{t('title')}</h2>
      <div className={s.galleryContent}>
        <GroupCart
          src={'/src/assets/img/mans/borus.JPG'}
          count={5}
          title={t('groups.men')}
        />
        <GroupCart
          title={t('groups.routine')}
          src={'/src/assets/img/rutine/loop.JPG'}
          count={2}
        />
        <GroupCart
          src={'/src/assets/img/NYPlankton/n_1_on_the_way.JPG'}
          count={5}
          title={t('groups.office_new_year')}
        />
        <GroupCart
          src={'/src/assets/img/napoleonsLife/IMG_5186.JPG'}
          count={8}
          title={t('groups.napoleon_life')}
        />
      </div>
    </section>
  );
}
