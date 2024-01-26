import styles from '../footer.module.scss';

const Logotype = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={'/assets/common/logo.svg'} alt={''} />
      <img
        className={styles.logotype}
        src={'/assets/common/logotype.svg'}
        alt={''}
      />
    </div>
  );
};

export default Logotype;
