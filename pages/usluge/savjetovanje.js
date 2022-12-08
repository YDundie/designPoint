import styles from '../../styles/ServiceDetail.module.css';
import ServicesList from '../../components/ServicesList';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import Wizard from '../../components/Wizard';
import Input from '../../components/Input';

export default function Savjetovanje() {
  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
      window.localStorage.getItem(key);
    }
  };

  const setToStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    console.log('name', name);
    console.log('address', address);
    if (name !== '' && address !== '') {
      setToStorage(2, JSON.stringify({ status: 'done', name, address }));
    } else {
      setToStorage(2, JSON.stringify({ status: 'failed', name, address }));
    }
  }, [name, address]);

  useEffect(function () {
    setToStorage('1', JSON.stringify({ status: 'done' }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.modal} ${showWizard ? styles.modalActive : ''} `}>
        <div className={styles.modalContent}>
          <Wizard
            onClickClose={() => {
              setShowWizard(!showWizard);
            }}
            mandatorySteps={[2, 6, 8]}
          >
            <div className={styles.wizardStep}>
              <h2>Uvod</h2>
              <h3>Hello, ne brinite,</h3>
              <p>mozete proci kroz upitnik i ispuniti informacije za koje ste sigurni.</p>
              <p>Ukoliko ne znate neku informaciju, mozete je preskociti i vratiti se kasnije da dopunite upitnik.</p>
              <p>
                <p className={styles.done}>1</p> - Korak uspjesno rijesen
              </p>
              <p>
                <p className={styles.failed}>2</p> - Fali informacija
              </p>
              <p>
                <p className={styles.active}>3</p> - Treunutni korak
              </p>
              <p>
                <span className={styles.notImp}>4</span> - Korak koji se moze preskociti
              </p>
            </div>
            <div className={styles.wizardStep}>
              <Input placeholder="Ime i Prezime" onChange={(e) => onNameChange(e)} value={name} />
              <Input placeholder="Adressa" onChange={(e) => onAddressChange(e)} value={address} />
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Treci korak</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget aliquam tincidunt, nisl elit aliquam</p>
            </div>
            <div className={styles.wizardStep}>
              <h2>Posalji</h2>
            </div>
          </Wizard>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.designerHeader} onClick={() => router.push('/usluge')} style={{ cursor: 'pointer' }}>
            • <span className={styles.line}></span>Usluga
          </h2>
          <h1 className={styles.uslugeHeaderText}>Savjetovanje</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <img src="../images/savjetovanje.png" alt="Savjetovanje" className={styles.contentImage} />
        <p>Točno ste zamislili kako će vaš budući dom izgledati, no ipak fali još nešto? </p>
        <p>
          Ukoliko imaš pitanje ili se dvoumiš oko odabira detalja ili nekog komada namještaja za svoj interijer, rješenje ti mogu ponuditi savjetom! E sad, to može biti pozivom čiji termin dogovaramo ili ako ispuniš online upitnik, savjeti ti u roku
          od 48 sati stižu na mail! Prije poziva, potrebno je dostaviti osnovni tlocrt prostora, sliku prostora i nekoliko slika interijera koji ti se sviđa.
        </p>
        <Button wide static onClick={() => setShowWizard(!showWizard)}>
          Ispuni online upitnik
        </Button>
      </div>
      <div className={styles.contentSpacerRight}>
        <ServicesList active="savjetovanje"></ServicesList>
      </div>
    </div>
  );
}
