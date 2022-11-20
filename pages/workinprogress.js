import Button from '../components/Button';
import styles from '../styles/WIP.module.css';

export default function Workinprogress() {
  return (
    <div className={styles.overlayForVideo}>
      <div className={styles.videoContent}>
        <h1>Work in progress</h1>
        <Button white wide to="/">
          Naslovnica
        </Button>
      </div>
      <video muted autoPlay loop playsInline style={{ marginTop: 80 }}>
        <source src="./videos/wip.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
