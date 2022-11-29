import styles from '../../styles/ServiceDetail.module.css';
import ServicesList from '../../components/ServicesList';
import { useRouter } from 'next/router';
import Button from '../../components/Button';

export default function Homestaging() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.designerHeader} onClick={() => router.push('/usluge')} style={{ cursor: 'pointer' }}>
            • <span className={styles.line}></span>Usluga
          </h2>
          <h1 className={styles.uslugeHeaderText}>Home staging</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img src="../images/homestagingslika.png" alt="Home staging" className={styles.contentImage} />
        <p>Predočite potencijalnim kupcima potencijal koji ima nekretnina koju prodajete uz male intervencije.</p>
        <p>
          Kupcima je katkad teško vidjeti potencijal nekretnina koje se prodaju, no ukoliko se ona malo uljepša – namještaj se posloži na drugačiji način, dodaju se neki detalji, a neki drugi izbace – šanse za prodaju su veće! Ova usluga obuhvaća
          savjetovanje.
        </p>
        <Button wide to="/kontakt">
          Kontaktirajte nas
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="homestaging"></ServicesList>
      </div>
    </div>
  );
}
