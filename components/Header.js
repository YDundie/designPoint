import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  return (
    <div>
      <div className={`${styles.container} ${styles.desktop}`}>
        <img src="./images/logo.png" alt="logo" className={styles.logo} />
        <Link href="/" className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>
          Naslovnica
        </Link>
        <Link href="/workinprogress" className={styles.link}>
          Projekti
        </Link>
        <Link href="/usluge" className={`${styles.link} ${router.pathname === '/usluge' ? styles.active : ''}`}>
          Usluge
        </Link>
        <Link href="/workinprogress" className={styles.link}>
          O nama
        </Link>
        <Link href="/workinprogress" className={styles.link}>
          Kontakt
        </Link>
      </div>
      <div className={`${styles.container} ${styles.mobile}`}>
        <img src="./images/logo.png" className={styles.logo} />
        <p
          style={{ textAlign: 'right', flex: 1 }}
          onClick={() => {
            toggleMenu();
          }}
        >
          Izbornik
        </p>
        <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          <p
            className={styles.close}
            onClick={() => {
              toggleMenu();
            }}
          >
            Zatvori
          </p>
          <Link
            href="/"
            className={`${styles.link} ${styles.active}`}
            onClick={() => {
              toggleMenu();
            }}
          >
            Naslovnica
          </Link>
          <Link
            href="/workinprogress"
            className={styles.link}
            onClick={() => {
              toggleMenu();
            }}
          >
            Projekti
          </Link>
          <Link
            href="/workinprogress"
            className={styles.link}
            onClick={() => {
              toggleMenu();
            }}
          >
            Usluge
          </Link>
          <Link
            href="/workinprogress"
            className={styles.link}
            onClick={() => {
              toggleMenu();
            }}
          >
            O nama
          </Link>
          <Link
            href="/workinprogress"
            className={styles.link}
            onClick={() => {
              toggleMenu();
            }}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
