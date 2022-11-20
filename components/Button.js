import styles from '../styles/Button.module.css';
import Link from 'next/link';
export default function Button(props) {
  return (
    <Link href={`${props.to}`} className={styles.button} style={props.wide ? { width: '100%', margin: 0 } : {}}>
      {props.children}
    </Link>
  );
}
