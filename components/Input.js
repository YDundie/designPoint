import styles from '../styles/Input.module.css';

export default function Input(props) {
  return (
    <div>
      {props.desc !== false ? (
        <input onChange={(e) => props.onChange(e)} type="text" className={`${styles.input}`} placeholder={props.placeholder} value={props.value} />
      ) : (
        <textarea onChange={(e) => props.onChange(e)} placeholder={props.placeholder} className={`${styles.input} ${styles.desc}`} value={props.value}></textarea>
      )}
    </div>
  );
}
