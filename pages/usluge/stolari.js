import styles from "../../styles/ServiceDetail.module.css";
import ServicesList from "../../components/ServicesList";
import { useRouter } from "next/router";
import Button from "../../components/Button";

export default function Stolari() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h2
            className={styles.designerHeader}
            onClick={() => router.push("/usluge")}
            style={{ cursor: "pointer" }}
          >
            • <span className={styles.line}></span>Usluga
          </h2>
          <h1 className={styles.uslugeHeaderText}>Vizualizacije za stolare</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img
          src="../images/vizualizacija.png"
          alt="Vizualizacije za stolare"
          className={styles.contentImage}
        />
        <p>
          Stolar si, a 3D vizualizacije nisu nešto na što želiš utrošiti svoje
          vrijeme, no istovremeno klijentu želiš pokazati kako će finalno
          izgledati njihova kuhinja ili walk in ormar o kojem su oduvijek
          sanjali? Ok, onda si na pravom mjestu jer u tome ti definitivno mogu
          pomoći. Putem 3D vizualizacije prikazat ću namještaj po mjeri koji
          tvojem klijentu u potpunosti odgovara te ti tako i dodatno osigurati
          prodaju istog.
        </p>
        <Button wide to="/kontakt">
          Kontaktirajte nas
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="stolari"></ServicesList>
      </div>
    </div>
  );
}
