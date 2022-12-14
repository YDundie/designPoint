import styles from "../../styles/ServiceDetail.module.css";
import ServicesList from "../../components/ServicesList";
import { useRouter } from "next/router";
import Button from "../../components/Button";

export default function Interijer() {
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
          <h1 className={styles.uslugeHeaderText}>Dizajn interijera</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img
          src="../images/dizajnInterjera.png"
          alt="Dizajn interijera"
          className={styles.contentImage}
        />
        <p>
          Idejno rješenje dizajna interijera može se ostvariti kroz 3 opcije,
          ovisno vašim o željama i potrebama.
        </p>
        <p style={{ fontWeight: "600" }}>Basic Point</p>
        <p>
          Opcija uključuje tlocrtni raspored namještaja, rasvjete te 3D
          vizualizacije.
        </p>
        <p style={{ fontWeight: "600" }}>Mid Point</p>
        <p>
          Opcija uključuje tlocrtni raspored namještaja, raspored rasvjete, 3D
          vizualizacije, popis kupovnog namještaja, popis zidnih i podnih
          obloga, prijedlog keramičarskih radova, popis materijala namještaja po
          mjeri
        </p>
        <p style={{ fontWeight: "600" }}>Advanced Point</p>
        <p>
          Opcija uključuje tlocrtni raspored namještaja, elektroinstalacija,
          rasvjete, vodovodnih instalacija, 3D vizualizacije, popis kupovnog
          namještaja, popis zidnih i podnih obloga, prijedlog keramičarskih
          radova, nacrti i materijali namještaja po mjeri
        </p>
        <Button wide to="/kontakt">
          Kontaktirajte nas
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="interjer"></ServicesList>
      </div>
    </div>
  );
}
