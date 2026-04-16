import cn from 'classnames';

import s from './AboutSct.module.scss';

export default function AboutSct() {
  return (
    <section className={cn(s.AboutSct)}>
      <div className={s.imgWrapper}>
        <img
          className={s.img}
          src={'/src/assets/img/main-photo.JPG'}
          alt={'Sophia Roman'}
        />
      </div>
      <div className={s.description}>
        <h3>Sophie Roman</h3>
        <p>“Дайте мені тисячу років - і я розмалюю небо...”</p>
      </div>
    </section>
  );
}
