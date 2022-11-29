import styles from '../styles/Service.module.css';
import { useRouter } from 'next/router';

export default function Service(props) {
  const router = useRouter();

  return (
    <div className={styles.service} onClick={() => router.push(props.to)}>
      <div className={styles.serviceIcon}>
        <img src={props.imgPath} alt="service images" className={styles.serviceImage} />
      </div>
      <div className={styles.serviceContent}>
        <h2 className={styles.serviceTitle}>{props.title}</h2>
        <p>{props.serviceDescription}</p>
      </div>
    </div>
  );
}
