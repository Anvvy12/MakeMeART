import cn from 'classnames';

import s from './WorksSct.module.scss';
import ArtCart from 'components/ArtCart';
import Button from 'ui/Button';

export default function WorksSct() {
  const images = Object.entries(
    import.meta.glob('/src/assets/img/last-works/*.{png,jpg,jpeg,JPG}', {
      eager: true,
      import: 'default',
    })
  ).map(([path, src]) => ({
    src: src as string,
    name: path.split('/').pop(),
  }));

  return (
    <section className={cn(s.WorksSct)}>
      {images.map((img, i) => (
        <ArtCart.Wrapper key={i} src={img.src} alt={img.name} title={img.name}>
          <ArtCart.Img src={img.src} alt={img.name} />
          <ArtCart.Content>
            <ArtCart.Description>
              <h4>{img.name}</h4>
              <p>
                Кукловод или кукла — граница между управлением и подчинением
              </p>
            </ArtCart.Description>
            <ArtCart.Action>
              <Button className={s.detailBtn} variant={'outline'}>
                Details
              </Button>
            </ArtCart.Action>
          </ArtCart.Content>
        </ArtCart.Wrapper>
      ))}
    </section>
  );
}
