import styles from '../styles/ReviewCard.module.css';
import Button from './Button';
export default function ReviewCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={props.image} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardButtons}>
          <Button to={props.link} wide>
            NA PROJEKT
          </Button>
        </div>
        <div className={styles.cardDates}>
          <p className={styles.cardDate}>{props.date}</p>
        </div>
      </div>
    </div>
  );
}
