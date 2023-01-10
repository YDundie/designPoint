import Button from '../../components/Button';
import ImageGallery from '../../components/ImageGallery';
import styles from '../../styles/ProjectDetail.module.css';
import { useRouter } from 'next/router';

export default function projectOne() {
  const router = useRouter();
  const images = ['../images/projects/office/1.png', '../images/projects/office/2.png', '../images/projects/office/3.png'];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.designerHeader} onClick={() => router.push('/projects')} style={{ cursor: 'pointer' }}>
          • <span className={styles.line}></span>Image gallery
        </h2>
        <div className={styles.contentProjectContainer}>
          <ImageGallery images={images} />
          <div className={styles.projectInfo}>
            <h2 className={styles.projectTitle}>Office</h2>
            <h3 className={styles.projectDescription}>Lokacija: Sveta Marija</h3>
            {/* <p className={styles.projectDate}>Datum : 11/12/2020</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
