import styles from '../../styles/ServiceDetail.module.css';
import ServicesList from '../../components/ServicesList';
import { useRouter } from 'next/router';
import Button from '../../components/Button';

export default function Tlocrt() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.designerHeader} onClick={() => router.push('/usluge')} style={{ cursor: 'pointer' }}>
            • <span className={styles.line}></span>Usluga
          </h2>
          <h1 className={styles.uslugeHeaderText}>Tlocrtni raspored namještaja</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img src="../images/tlocrt.png" alt="Tlocrtni raspored namještaja" className={styles.contentImage} />
        <p>Idejno rješenje rasporeda namještaja u obliku tlocrta s ciljem optimalne funkcionalnosti prostora i jednostavnijeg daljnjeg planiranja uređenja. </p>
        <p>
          Tlocrtno idejno rješenje idealno je kako bi se prostor koji uređujemo što bolje iskoristio u odnosu na naše dnevne aktivnosti. Također, važno je da se raspored namještaja planira tlocrtno, kako bi se izbjegla natrpanost istog jer ako
          željeni namještaj ne stane na 2D prostoru, još će manje stati u fizičkom prostoru.
        </p>
        <Button wide to="/kontakt">
          Kontaktirajte nas
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="tlocrt"></ServicesList>
      </div>
    </div>
  );
}
