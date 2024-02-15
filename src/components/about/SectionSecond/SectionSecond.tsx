import Image from 'next/image';
import styles from './SectionSecond.module.scss';
import useWindowDimensions from '@/utils/useWindowDimensions';

export const SectionSecond = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.sectionWrapper}>
      <div>
        <Image
          src={
            width && width < 992
              ? '/assets/about/onas2.png'
              : '/assets/about/onas2-desktop.png'
          }
          alt="cylinder"
          width={1000}
          height={0}
        />
      </div>

      <div className={styles.content}>
        <h2>Nasza historia</h2>
        <p>
          Zdecydowaliśmy się zaangażować w branżę kominkową. Importowaliśmy oraz
          dystrybuowaliśmy wkłady kominkowe prestiżowych firm zagranicznych.
        </p>
        <p>
          W roku 2023 rozpoczęliśmy własną produkcję stalowych wkładów
          kominkowych BALSTIL z okładziną szamotową (powietrznychi z płaszczem
          wodnym). Wszystkie wyroby sprzedawane przez naszą firmę, zarówno
          importowane jak i produkowane, oznaczane są naszym własnym, dobrze
          rozpoznawalnym logo: BALSTIL.
        </p>
      </div>
    </div>
  );
};
