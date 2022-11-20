import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer(props) {
  return (
    //TODO make footer
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.contactInfo}>
          <img src="./images/logo.png" height={60} style={{ marginTop: 20 }} />
          <p>DESIGN POINT, obrt za dizajn interijera, vl. Ana-Marija Mustač, Glavna 18c</p>
          <p>OIB: 45160933509</p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <h3>Info:</h3>
          <div className={styles.topAndBottomMargin}>
            <p>Sveta Marija, Glavna 18c</p>
          </div>
          <div className={styles.topAndBottomMargin}>
            <p>
              Telefon: <a href="tel:+385 98 123 4567">+385 98 123 4567</a>
            </p>

            <p>
              Mail: <a href="mailto:info@designpoint.hr">info@designpoint.hr</a>
            </p>
          </div>
          <div className={styles.topAndBottomMargin}>
            <p>Pon - Pet: prema dogovoru </p>
            <p>Sub i Ned: zatvoreno </p>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.contactInfo}>
          <h3>Društvene mreže:</h3>
          <div className={styles.socialsInfo}>
            <p>
              <Link href="">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </Link>
            </p>
            <p>
              <Link href="">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
