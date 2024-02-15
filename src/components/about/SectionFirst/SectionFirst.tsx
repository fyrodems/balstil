import Image from 'next/image';
import styles from './SectionFirst.module.scss';
import useWindowDimensions from '@/utils/useWindowDimensions';

export const SectionFirst = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.sectionWrapper}>
      <div>
        <Image
          src={
            width && width < 992
              ? '/assets/about/onas1.png'
              : '/assets/about/onas1-desktop.png'
          }
          alt="cylinder"
          width={1000}
          height={0}
        />
      </div>

      <div className={styles.content}>
        <h2>Innowacyjne kominki</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <ul>
          <li>
            <Image
              src="/assets/about/flameIcon.svg"
              alt="cylinder"
              width={24}
              height={24}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </li>
          <li>
            <Image
              src="/assets/about/flameIcon.svg"
              alt="cylinder"
              width={24}
              height={24}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </li>
          <li>
            <Image
              src="/assets/about/flameIcon.svg"
              alt="cylinder"
              width={24}
              height={24}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
