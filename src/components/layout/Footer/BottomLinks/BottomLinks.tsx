import styles from '../Footer.module.scss';

const BottomLinks = () => {
  return (
    <div className={styles.bottomWrapper}>
      <div>
        <small>About us</small>
        <small>Contact</small>
        <small>Privacy policy</small>
        <small>Sitemap</small>
        <small>Terms of Use</small>
      </div>
      <small>© 2024 All Rights Reserved</small>
    </div>
  );
};

export default BottomLinks;
