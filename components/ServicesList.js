import styles from '../styles/ServicesList.module.css';
import { useRouter } from 'next/router';

export default function Service(props) {
  const router = useRouter();
  return (
    <div>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${props.active === 'tlocrt' ? styles.active : ''}`} onClick={() => router.push('/usluge/tlocrt')}>
          Tlocrtni raspored namještaja
        </li>
        <li className={`${styles.listItem} ${props.active === 'interjer' ? styles.active : ''}`} onClick={() => router.push('/usluge/interijer')}>
          Dizajn interijera
        </li>
        <li className={`${styles.listItem} ${props.active === 'smarthome' ? styles.active : ''}`} onClick={() => router.push('/usluge/smarthome')}>
          Smart home
        </li>
        <li className={`${styles.listItem} ${props.active === 'stolari' ? styles.active : ''}`} onClick={() => router.push('/usluge/stolari')}>
          Vizualizacije za stolare
        </li>
        <li className={`${styles.listItem} ${props.active === 'homestaging' ? styles.active : ''}`} onClick={() => router.push('/usluge/homestaging')}>
          Home staging
        </li>
        <li className={`${styles.listItem} ${props.active === 'savjetovanje' ? styles.active : ''}`} onClick={() => router.push('/usluge/savjetovanje')}>
          Savjetovanje
        </li>
      </ul>
    </div>
  );
}
