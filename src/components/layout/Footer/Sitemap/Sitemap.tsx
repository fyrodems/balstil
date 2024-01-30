import styles from '../Footer.module.scss';

const Sitemap = () => {
  return (
    <div className={styles.sitemap_wrapper}>
      <div className={styles.sitemapColumn}>
        <div className={styles.sitemapTitle}>About</div>
        <div>
          <div>About us</div>
          <div>Blog</div>
          <div>Careers</div>
          <div>Jobs</div>
          <div>In Press</div>
        </div>
      </div>
      <div className={styles.sitemapColumn}>
        <div className={styles.sitemapTitle}>About</div>
        <div>
          <div>About us</div>
          <div>Blog</div>
          <div>Careers</div>
          <div>Jobs</div>
          <div>In Press</div>
        </div>
      </div>
      <div className={styles.sitemapColumn}>
        <div className={styles.sitemapTitle}>About</div>
        <div>
          <div>About us</div>
          <div>Blog</div>
          <div>Careers</div>
          <div>Jobs</div>
          <div>In Press</div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
