import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function Onama() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div class={styles.aboutUsImage}>
          <div className={styles.imageHolder}>
            <img src="./images/designer.jpg" alt="designer image" className={styles.designerImage} />
          </div>
        </div>
        <div class={styles.aboutUsContent}>
          <h2 className={styles.designerHeader}>
            • <span className={styles.line}></span>O nama
          </h2>
          <p>Moje ime je Ana-Marija Mustač, a Design Ponit je tu jer vjerujem da je dobar dizajn interijera prva stepenica u realizaciji prostora po tvojoj mjeri.</p>
          <p>
            Od 2018. godine sanjam o pokretanju vlastitog studija za dizajn interijera, te sam tijekom tog četverogodišnjeg perioda, uz formalnu edukaciju u Učilištu Profokus, izbrusila svoje oko za boje i detalje. Također, savladala sam i tehničke
            zahtjeve koji se trebaju poštovati u dizajnu nekog prostora, bilo da se radilo o namještaju po mjeri ili o prijedlogu pozicioniranja instalacija. Sve navedeno dovelo me do Design Pointa – točke u kojoj se spajaju iskustvo, kreativnost i
            profesionalnost.
          </p>
          <p>Svakom projektu pristupam individualno, maksimalno se pridržavajući budžeta predviđenog za uređenje prostora, jer ipak, nema smisla da imamo vizualizaciju nečeg što se u konačnici ne može izvesti, zar ne?</p>
          <p>
            Kombinacija sveg navedenog rezultira vrhunskim dizajnom interijera prilagođenim vašim potrebama, navikama i budžetu. Uslugu koja je idealna za tebe možeš potražiti{' '}
            <Link href="/usluge" className={styles.link}>
              ovdje.
            </Link>
          </p>
          <p>
            Zahvaljujući mom tehničkom znanju, tu sam i da stolarima „skratim muke“ te da za njih vizualiziram namještaj po mjeri kako bi se isti klijentu što realnije prikazao. Više o toj usluzi možeš pročitati{' '}
            <Link href="/usluge/stolari" className={styles.link}>
              ovdje.
            </Link>
          </p>
          <br />
          <p>
            Ako ste spremni za preobrazbu svog prostora,{' '}
            <Link href="/kontakt" className={styles.link}>
              {' '}
              javite mi se
            </Link>{' '}
            i dogovorite svoj termin!
          </p>
        </div>
      </div>
    </div>
  );
}
