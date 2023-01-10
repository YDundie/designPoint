import Button from '../../components/Button';
import ImageGallery from '../../components/ImageGallery';
import styles from '../../styles/ProjectDetail.module.css';
import { useRouter } from 'next/router';

export default function projectOne() {
  const router = useRouter();
  const images = [
    '../images/projects/zapresic/1.png',
    '../images/projects/zapresic/5.png',
    '../images/projects/zapresic/3.png',
    '../images/projects/zapresic/4.png',
    '../images/projects/zapresic/6.png',
    '../images/projects/zapresic/2.png',
    '../images/projects/zapresic/7.png',
    '../images/projects/zapresic/8.png',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.designerHeader} onClick={() => router.push('/projects')} style={{ cursor: 'pointer' }}>
          • <span className={styles.line}></span>Image gallery
        </h2>
        <div className={styles.contentProjectContainer}>
          <ImageGallery images={images} />
          <div className={styles.projectInfo}>
            <h2 className={styles.projectTitle}>Stan u potkrovlju</h2>
            <h3 className={styles.projectDescription}>Lokacija: Zaprešić</h3>
            {/* <p className={styles.projectDate}>Datum : 11/12/2020</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
