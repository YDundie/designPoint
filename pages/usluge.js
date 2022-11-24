import styles from '../styles/Usluge.module.css';
import ServiceCard from '../components/ServiceCard';
export default function Usluge() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.uslugeHeaderConteiner}>
          <div>
            <h2 className={styles.designerHeader}>
              • <span className={styles.line}></span>Usluge
            </h2>
            <h1 className={styles.uslugeHeaderText}>Kvaliteta naših usluga i zadovoljstvo klijenata su nam na prvom mjestu.</h1>
          </div>
          <div className={styles.uslugeHeaderRight}>
            <p className={styles.uslugeHeaderParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt</p>
          </div>
        </div>
      </div>
      <div className={styles.uslugeCardsContainer}>
        <ServiceCard
          icon="./icons/layout.png"
          title="Tlocrtni raspored namještaja"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt"
          to="/usluge/web-dizajn"
          imgPath="./images/testimonial1.jpg"
        />
        <ServiceCard
          icon="./icons/designInt.png"
          title="Dizajn interijera"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt"
          to="/usluge/web-dizajn"
          imgPath="./images/testimonial1.jpg"
        />
        <ServiceCard
          icon="./icons/smart-home.png"
          title="Smart home"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt"
          to="/usluge/web-dizajn"
          imgPath="./images/testimonial1.jpg"
        />
        <ServiceCard
          icon="./icons/kitchen.png"
          title="Vizualizacije za stolare"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt"
          to="/usluge/web-dizajn"
          imgPath="./images/testimonial1.jpg"
        />
        <ServiceCard
          icon="./icons/home.png"
          title="Home staging"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt"
          to="/usluge/web-dizajn"
          imgPath="./images/testimonial1.jpg"
        />
        <ServiceCard
          imgPath="./images/testimonial1.jpg"
          title="Savjetovanje"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl lorem non nisl. Sed tincidunt, nunc vel tincidunt"
          to="/usluge/web-dizajn"
          icon="./icons/tech-support.png"
        />
      </div>
    </div>
  );
}
