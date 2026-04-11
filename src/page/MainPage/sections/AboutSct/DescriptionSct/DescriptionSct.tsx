import cn from 'classnames';

import s from './DescriptionSct.module.scss';
import Button from '../../../../../ui/Button';

export default function DescriptionSct() {
  return (
    <section className={cn(s.DescriptionSct)}>
      <p className={s.subTitle}>Современный художник</p>
      <h1 className={s.title}>Мир глазами художника</h1>
      <p className={s.description}>
        Сюрреалистические работы, рождённые на стыке сна и реальности. Каждая
        линия — это история, каждый штрих — эмоция, застывшая на бумаге.
      </p>
      <div className={s.actions}>
        <Button>Works</Button>
        <Button variant={'outline'}>About me</Button>
      </div>
    </section>
  );
}
