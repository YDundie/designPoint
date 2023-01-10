import Button from '../../components/Button';
import ImageGallery from '../../components/ImageGallery';
import styles from '../../styles/ProjectDetail.module.css';
import { useRouter } from 'next/router';

export default function projectOne() {
  const router = useRouter();
  const images = ['https://picsum.photos/600/300', 'https://picsum.photos/500/300', 'https://picsum.photos/400/600', 'https://picsum.photos/400/300'];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.designerHeader} onClick={() => router.push('/projects')} style={{ cursor: 'pointer' }}>
          • <span className={styles.line}></span>Image gallery
        </h2>
        <div className={styles.contentProjectContainer}>
          <ImageGallery images={images} />
          <div className={styles.projectInfo}>
            <h2 className={styles.projectTitle}>Uredenje stana</h2>
            <h3 className={styles.projectDescription}>Lokacija: Sveta Marija</h3>
            <p className={styles.projectDate}>Datum : 11/12/2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
