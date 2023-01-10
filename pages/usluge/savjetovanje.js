import styles from '../../styles/ServiceDetail.module.css';
import ServicesList from '../../components/ServicesList';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { getFromStorage, setToStorage } from '../../Utils/LocalStorageUtils';

export default function Savjetovanje() {
  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [status, setStatus] = useState(['done', '', '', '', '', '', '', '', '']);

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (getFromStorage('status') !== null) {
      setStatus(getFromStorage('status'));
    }
    if (getFromStorage('name', true) !== null) {
      setName(getFromStorage('name', true));
    }
    if (getFromStorage('address', true) !== null) {
      setAddress(getFromStorage('address', true));
    }
  }, []);

  useEffect(() => {
    if (name !== '' && address !== '') {
      status[1] = 'done';
      setStatus([...status]);
    } else {
      status[1] = 'failed';
      setStatus([...status]);
    }
    setToStorage('status', JSON.stringify(status));
  }, [name, address]);

  const onNameChange = (e) => {
    setName(e.target.value);
    setToStorage('name', e.target.value);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
    setToStorage('address', e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.modal} ${showWizard ? styles.modalActive : ''} `}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>Upitnik, DOLAZI USKORO JOS U IZRADI :)</h2>
            <span className={styles.close} onClick={() => setShowWizard(false)}>
              &times;
            </span>
          </div>
          <div className={styles.wizardContent}>
            <div className={styles.wizardSteps}>
              {status.map((statusStep, index) => {
                return (
                  <div className={styles.wizardStep} onClick={() => setStep(index + 1)}>
                    <div className={`${styles.wizardStepNumber} ${index + 1 === step ? styles.active : styles.inActive} ${styles[statusStep]}`}>{index + 1}</div>
                  </div>
                );
              })}
            </div>
            <div className={`${styles.wizardStepContent} ${step !== 1 ? styles.hideStep : ''}`}>
              <h2>Uvod</h2>
              <h3>Hello, ne brinite,</h3>
              <p>mozete proci kroz upitnik i ispuniti informacije za koje ste sigurni.</p>
              <p>Ukoliko ne znate neku informaciju, mozete je preskociti i vratiti se kasnije da dopunite upitnik.</p>
              <p className={styles.done}>1</p> - Korak uspjesno rijesen
              <br />
              <br />
              <p className={styles.failed}>2</p> - Neophodan korak / Fali informacija
              <br />
              <br />
              <p className={styles.active} style={{ margin: '0 10px' }}>
                3
              </p>
              - Treunutni korak
              <br />
              <br />
              <span className={styles.inActive} style={{ margin: '0 10px' }}>
                4
              </span>
              - Korak koji se moze preskociti
            </div>
            <div className={`${styles.wizardStepContent} ${step !== 2 ? styles.hideStep : ''}`}>
              <Input placeholder="Ime i Prezime" onChange={(e) => onNameChange(e)} value={name} />
              <Input placeholder="Adressa" onChange={(e) => onAddressChange(e)} value={address} />
            </div>
          </div>
          <div className={styles.wizardButtons}>
            <Button static onClick={prevStep} disabled={step === 1}>
              {`<`}
            </Button>
            <Button static onClick={nextStep} disabled={step === status.length}>
              {`>`}
            </Button>
          </div>
        </div>
      </div>
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
