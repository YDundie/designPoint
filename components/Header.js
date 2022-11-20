import styles from '../styles/Header.module.css';
import Link from 'next/link';
export default function Header() {
  return (
    <div className={styles.container}>
      <img src="./images/logo.png" className={styles.logo} />
      <Link href="/" className={`${styles.link} ${styles.active}`}>
        Naslovnica
      </Link>
      <Link href="/" className={styles.link}>
        Projekti
      </Link>
      <Link href="/" className={styles.link}>
        Usluge
      </Link>
      <Link href="/" className={styles.link}>
        O nama
      </Link>
      <Link href="/" className={styles.link}>
        Cjenik
      </Link>
      <Link href="/" className={styles.link}>
        Kontakt
      </Link>
    </div>
  );
}
