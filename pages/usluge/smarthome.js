import styles from '../../styles/ServiceDetail.module.css';
import ServicesList from '../../components/ServicesList';
import { useRouter } from 'next/router';
import Button from '../../components/Button';

export default function Smarthome() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.designerHeader} onClick={() => router.push('/usluge')} style={{ cursor: 'pointer' }}>
            • <span className={styles.line}></span>Usluga
          </h2>
          <h1 className={styles.uslugeHeaderText}>Smart Home</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img src="../images/smartHome.jpg" alt="Smart Home" className={styles.contentImage} />
        <p>Tehnologija se uvukla u svaki aspekt naših života, pa zašto je onda ne bismo integrirali i u naš dom?</p>
        <p>
          Smart home je način povezivanja različitih dijelova kuće u jednu mobilnu aplikaciju, ali to je puno više od touch screen prekidača i robotskog usisavača kojem možete „zapovjediti“ da usisava kad vas nema kod kuće. Tako se mogu kontrolirati
          rasvjeta, ulazna vrata, grijanje (ili hlađenje), video nadzor, audio sustav. Takvu mrežu važno je isplanirati na vrijeme, već u fazi tlocrtnog rasporeda namještaja, kako bi se smart home na adekvatan uklopio u vaš životni stil i uređenje
          doma.
        </p>
        <p>Ukoliko ste zainteresirani za integraciju tehnologije u vaš dom, isto napomenite prilikom kontaktiranja.</p>
        <Button wide to="/kontakt">
          Kontaktirajte nas
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="smarthome"></ServicesList>
      </div>
    </div>
  );
}
