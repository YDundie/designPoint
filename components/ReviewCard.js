import styles from '../styles/ReviewCard.module.css';
export default function ReviewCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardButtons}></div>
        <div className={styles.cardDates}>
          <p className={styles.cardDate}>{props.date}</p>
        </div>
      </div>
    </div>
  );
}
