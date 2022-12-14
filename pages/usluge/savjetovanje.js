import styles from "../../styles/ServiceDetail.module.css";
import ServicesList from "../../components/ServicesList";
import { useRouter } from "next/router";
import Button from "../../components/Button";

export default function Savjetovanje() {
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
          <h1 className={styles.uslugeHeaderText}>Savjetovanje</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img
          src="../images/savjetovanje.png"
          alt="Savjetovanje"
          className={styles.contentImage}
        />
        <p>
          Ukoliko imaš pitanje ili se dvoumiš oko odabira detalja ili nekog
          komada namještaja za svoj interijer, rješenje ti mogu ponuditi
          savjetom! E sad, to može biti pozivom čiji termin dogovaramo ili ako
          ispuniš online upitnik, savjeti ti u roku od 48 sati stižu na mail!
          Prije poziva, potrebno je dostaviti osnovni tlocrt prostora, sliku
          prostora i nekoliko slika interijera koji ti se sviđa.
        </p>
        <Button wide to="/kontakt">
          Kontaktirajte nas
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="savjetovanje"></ServicesList>
      </div>
    </div>
  );
}
