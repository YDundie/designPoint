import styles from '../styles/ServiceCard.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ServiceCard(props) {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <div className={styles.card} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()} onClick={() => router.push(props.to)}>
      <div className={styles.cardImageContainer}>
        <img src={props.imgPath} className={styles.cardImage} />
        <img src={props.icon} className={`${styles.cardImageDesign} ${hover ? styles.cardImageDesignActive : ''}`} />
      </div>
      <div className={styles.cardContent}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardButtons}>Više</div>

        <div className={styles.cardDates}>
          <img src="./icons/right-arrow.png" className={styles.learnMoreImage} />
        </div>
      </div>
    </div>
  );
}
