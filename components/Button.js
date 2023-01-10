import styles from '../styles/Button.module.css';
import Link from 'next/link';
export default function Button(props) {
  if (!props.static) {
    return (
      <Link href={`${props.to}`} className={`${props.white ? styles.whiteButton : styles.button} ${props.disabled && styles.disabled}`} style={props.wide ? { width: '100%', margin: 0 } : {}}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button disabled={props.disabled} onClick={props.onClick} className={`${props.white ? styles.whiteButton : styles.button} ${props.disabled && styles.disabled}`} style={props.wide ? { width: '100%', margin: 0 } : {}}>
        {props.children}
      </button>
    );
  }
}
