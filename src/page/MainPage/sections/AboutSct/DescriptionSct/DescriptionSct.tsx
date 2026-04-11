import cn from 'classnames';

import s from './DescriptionSct.module.scss';
import Button from '../../../../../ui/Button';

export default function DescriptionSct() {
  return (
    <section className={cn(s.DescriptionSct)}>
      <div className={s.actions}>
        <Button>Works</Button>
        <Button variant={'outline'}>About</Button>
      </div>
    </section>
  );
}
