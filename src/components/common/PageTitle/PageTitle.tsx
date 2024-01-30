import styles from './PageTitle.module.scss';

interface PageTitleProps {
  pageTitle: string;
  supportingText: string;
  mainColor: string;
  gradient?: 'to-left' | 'to-right';
}

export const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  supportingText,
  mainColor,
  gradient,
}) => {
  return (
    <div className={styles.pageTitleWrapper}>
      <div className={styles.supportingText} style={{ color: mainColor }}>
        {supportingText}
      </div>
      <h1
        className={styles.pageTitle}
        style={{
          backgroundImage: `linear-gradient(${
            gradient === 'to-right' ? '90deg' : '275deg'
          }, #FFF 0%, ${mainColor} 60%)`,
        }}
      >
        {pageTitle}
      </h1>
    </div>
  );
};

{
  /* <PageTitle
pageTitle={'Cylinde'}
supportingText={'ogrzewacz gazowy poziomy'}
mainColor="#A48F59"
/> */
}
