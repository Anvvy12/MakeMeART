import LogoImg from 'img/Logo.png';

import s from './Logo.module.scss';

export default function Logo() {
  return <img className={s.Logo} src={LogoImg} alt={'logo'} />;
}
