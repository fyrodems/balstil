import Image from 'next/image';
import styles from './SectionSecond.module.scss';

export const SectionSecond = () => {
  return (
    <div>
      <div>
        <Image
          src="/assets/about/onas2.png"
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
