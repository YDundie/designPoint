import styles from '../styles/Service.module.css';
export default function Service(props) {
  return (
    <div className={styles.service}>
      <div className={styles.serviceIcon}>
        <img src={props.imgPath} className={styles.serviceImage} />
      </div>
      <div className={styles.serviceContent}>
        <h2 className={styles.serviceTitle}>{props.title}</h2>
        <p>{props.serviceDescription}</p>
      </div>
    </div>
  );
}
