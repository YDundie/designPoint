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
          <img src="./images/logo.png" alt="logo" height={60} style={{ marginTop: 20 }} />
          <p>DESIGN POINT, obrt za dizajn interijera</p>
          <p>vl. Ana-Marija Mustač, Glavna 18c</p>
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
              Telefon: <a href="tel:040 313 892">040 313 892</a>
            </p>

            <p>
              Mail: <a href="mailto:info@designpoint.hr">info@designpoint.hr</a>
            </p>
          </div>
          <div className={styles.topAndBottomMargin}>
            <p>Pon - Pet: 07:00-15:00 (uz najavu) </p>
            <p style={{ paddingBottom: 20 }}>Sub i Ned: zatvoreno </p>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.contactInfo}>
          <h3>Društvene mreže:</h3>
          <div className={styles.socialsInfo}>
            <p>
              <Link href="https://www.facebook.com/profile.php?id=100088107483725" target="_blank">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </Link>
            </p>
            <p>
              <Link href="https://www.instagram.com/design_point__/" target="_blank">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
