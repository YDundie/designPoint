import Head from 'next/head';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';
import ReviewCard from '../components/ReviewCard';
import Service from '../components/Service';
// import FadeIn from '../components/FadeIn';

export default function Home() {
  const reviews = [
    'Od samog početka izražavam iznimno zadovoljstvo komunikacijom i individualnim pristupom.. Tijekom cijelog procesa poštivale su se naše želje i zahtjevi u potpunosti, plan je u svakom detalju podređen našem načinu života. Svaka prostorija dizajnirana je na temelju detaljnog razgovora i dogovora. Također, za pojedine prostorije ponuđeno nam je nekoliko mogućih inovativnih rješenja, od kojih smo mi odabrali onaj koji najviše odgovara našim potrebama. Svidjelo nam se da je kod bitnih elemenata (primjerice kutna garnitura u dnevnom boravku, rasvjeta, pločice, razni dodaci…), ponuđeno nekoliko primjera, sa odgovarajućom e-poveznicom koja usmjerava na detalje o proizvodu.  U konačnici, u zaista kratkom vremenskom razdoblju dobili smo plan dizajna interijera koji u potpunosti odgovara našim životnim potrebama i zahtjevima. Prijateljski pristup i otvorena komunikacija prisutni su od samog početka suradnje i činili su je iznimno ugodnom.  Osim vlastitog zadovoljstva, svjedočimo i zadovoljstvu izvođača radova kojima je navedeni plan od iznimne koristi tijekom realizacije.',
    'Projekt se sastoji od dizajna kuhinje, blagavaonice, dnevne sobe i kupanice te je bio izrađen od strane dizajnerice Ana-Marije Mustač. Dizajnerica je vrlo komunikativna i stručna, trudi se čim pobliže saznati stil i ukus klijenata, uvažava mišljenje i želje, daje prijedlog što i kako napraviti (izrada tlocrta i 3D prikaza u više verzija), ali nije nametljiva sa svojim idejama. Projekt se sastojao od izrade tlocrta i modela u 3D prikazu. Mi kao klijenti vrlo smo zadovoljni završnim projektom, on uključuje sve naše želje, prostor je lijepo prikazan sa svim završnim mjerama. Dizajnerica se potrudila u pronalasku svih traženih elemenata kako i glavnih tako i onih koji popune prostor. Izradila je i slike kako bi to u stvarnosti moglo izgledati tzv. rendere i nakon što smo vidjeli završni projekt želimo da naš budući dom tako izgleda. Ocjena 5/5',
  ];

  return (
    <div>
      <Head>
        <title>Design Point</title>
      </Head>
      <div className={styles.imageContainer}>
        <div className={`${styles.imageContent} ${styles.container}`}>
          <h1 className={`${styles.header} ${styles.timesNewRomanFont}`}>Stilski interijeri za svako poglavlje života.</h1>
          <h4 className={styles.header}>U Design Pointu stvaramo bezvremenske interijere s naglaskom na udoban namještaj, skladne boje i hrabre teksture.</h4>
        </div>
        <div className={`${styles.imageButtons} ${styles.container}`}>
          <Button white to="/workinprogress">
            KONTAKTIRAJE NAS
          </Button>
          <Button white to="/workinprogress">
            VIŠE INFORMACIJA
          </Button>
        </div>
        <img src="./images/welcomeRender.jpg" alt="" className={styles.homeImage} />
      </div>
      <div className={styles.container}>
        <div className={` ${styles.uslugeContainer} ${styles.reveal}`}>
          <h1 className={styles.uslugeHeader}>Usluge</h1>
          {/* <FadeIn> */}
          <div className={styles.usluge}>
            <Service imgPath="./icons/layout.png" title="Tlocrtni raspored namještaja"></Service>
            <Service imgPath="./icons/designInt.png" title="Dizajn interijera"></Service>
            <Service imgPath="./icons/smart-home.png" title="Smart home"></Service>
          </div>
          {/* </FadeIn> */}
          {/* <FadeIn> */}
          <div className={styles.usluge}>
            <Service imgPath="./icons/kitchen.png" title="Vizualizacije za stolare"></Service>
            <Service imgPath="./icons/home.png" title="Home staging"></Service>
            <Service imgPath="./icons/tech-support.png" title="Savjetovanje"></Service>
          </div>
          {/* </FadeIn> */}
        </div>
        <div className={` ${styles.designerTable}  ${styles.reveal}`}>
          <div class={styles.designerTableImage}>
            {/* <FadeIn> */}
            <img src="./images/designer.jpg" className={styles.designerImage} />
            {/* </FadeIn> */}
          </div>
          <div class={styles.designerTableContent}>
            {/* <FadeIn> */}
            <h2 className={styles.designerHeader}>
              • <span className={styles.line}></span> Vaša dizajnerica
            </h2>
            <h3 className={styles.timesNewRomanFont}>Ja sam Ana-Marija Mustač, vaša dizajnerica interijera, a planski i sveobuhvatan pristup dizajnu interijera ono je od čega ne odstupam.</h3>
            <p>Radim s osobama čija želja je urediti interijer koji je u skladu s njihovim afinitetima, životnim navikama i financijskim mogućnostima.</p>
            <p>
              Design Point nastao je s vizijom spajanja svih aspekata dizajna interijera u jednu točku od koje se polazi. Bilo da želite tlocrtno rješenje, vizualno rješenje s popratnom dokumentacijom ili pak vizualno rješenje s integriranom smart
              home tehnologijom i popratnom dokumentacijom - na pravom ste mjestu!
            </p>
            <Button wide to="/workinprogress">
              Saznajte više
            </Button>
            {/* </FadeIn> */}
          </div>
        </div>
        <h1 className={styles.clientsHeader}>ŠTO KAŽU klijenti?</h1>

        <div className={styles.testimonialsContainer}>
          <ReviewCard image="./images/testimonial1.jpg" title={'Ivana M.'} description={reviews[1]} date={''}></ReviewCard>
          <ReviewCard image="./images/testimonial1.jpg" title={'Mateja L.'} description={reviews[0]} date={''}></ReviewCard>
        </div>
      </div>
    </div>
  );
}
