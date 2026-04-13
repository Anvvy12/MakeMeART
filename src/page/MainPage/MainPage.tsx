import cn from 'classnames';

import s from './MainPage.module.scss';
import WorksSct from './sections/WorksSct';

export default function MainPage() {
  return (
    <main className={cn(s.MainPage)}>
      {/*<AboutSct />*/}
      <WorksSct />
    </main>
  );
}
