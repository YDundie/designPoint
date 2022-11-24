import styles from '../styles/Usluge.module.css';
import ServiceCard from '../components/ServiceCard';
import { useRouter } from 'next/router';

export default function Usluge() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.uslugeHeaderConteiner}>
          <div className={styles.uslugeHeaderLeft}>
            <h2 className={styles.designerHeader} onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
              • <span className={styles.line}></span>Usluge
            </h2>
            <h1 className={styles.uslugeHeaderText}>Kvaliteta naših usluga i zadovoljstvo klijenata su nam na prvom mjestu.</h1>
          </div>
          <div className={styles.uslugeHeaderRight}>
            <p className={styles.uslugeHeaderParagraph}> Design point nudi usluge rendera, savjetovanja, pametnih kuća, vizualizacije za stolare i naravno dizajn interijera. </p>
          </div>
        </div>
      </div>
      <div className={styles.uslugeCardsContainer}>
        <ServiceCard
          icon="./icons/layout.png"
          title="Tlocrtni raspored namještaja"
          description="Idejno rješenje rasporeda namještaja u obliku tlocrta s ciljem optimalne funkcionalnosti prostora i jednostavnijeg daljnjeg planiranja uređenja."
          to="/usluge/tlocrt"
          imgPath="https://picsum.photos/id/1/800/300"
        />
        <ServiceCard
          icon="./icons/designInt.png"
          title="Dizajn interijera"
          description="3D vizualizacija prostora koji se uređuje s uključenim tlocrtnim rasporedom namještaja i drugim uslugama, ovisno o odabranoj opciji uređenja."
          to="/usluge/interijer"
          imgPath="https://picsum.photos/id/95/800/300"
        />
        <ServiceCard
          icon="./icons/smart-home.png"
          title="Smart home"
          description="Tehnologija se uvukla u svaki aspekt naših života, pa zašto je onda ne bismo integrirali i u naš dom?"
          to="/usluge/smarthome"
          imgPath="https://picsum.photos/id/3/800/300"
        />
        <ServiceCard icon="./icons/kitchen.png" title="Vizualizacije za stolare" description="Brz i efikasan način da se klijentu prikaže finalni izgled željenog komada namještaja." to="/usluge/stolari" imgPath="https://picsum.photos/id/4/800/300" />
        <ServiceCard
          icon="./icons/home.png"
          title="Home staging"
          description="Predočite potencijalnim kupcima potencijal koji ima nekretnina koju prodajete uz male intervencije."
          to="/usluge/homestaging"
          imgPath="https://picsum.photos/id/7/800/300"
        />
        <ServiceCard imgPath="https://picsum.photos/id/55/800/300" title="Savjetovanje" description="Točno ste zamislili kako će vaš budući dom izgledati, no ipak fali još nešto?" to="/usluge/savjetovanje" icon="./icons/tech-support.png" />
      </div>
    </div>
  );
}
