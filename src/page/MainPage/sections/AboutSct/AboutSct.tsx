import cn from 'classnames';

import s from './AboutSct.module.scss';

export default function AboutSct() {
  return (
    <section className={cn(s.AboutSct)} id='about-sct'>
      <div className={s.imgWrapper}>
        <img
          className={s.img}
          src={'/src/assets/img/main-photo.JPG'}
          alt={'Sophia Roman'}
        />
      </div>
      <div className={s.description}>
        <h3>Sophie Roman</h3>
        <p>Київська художниця. Сучасне та наївне мистецтво</p>
      </div>
    </section>
  );
}
