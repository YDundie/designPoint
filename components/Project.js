import styles from '../styles/Project.module.css';
import { useRouter } from 'next/router';

export default function Project({ image, title, date, to }) {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push(`/${to}`);
      }}
    >
      <div className={styles.projectContainer}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.projectTextContainer}>
          <h2 className={styles.projectTitle}>{title}</h2>
          <p className={styles.projectDate}>{date}</p>
        </div>
      </div>
    </div>
  );
}
