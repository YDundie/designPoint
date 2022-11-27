import styles from '../styles/Contact.module.css';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationArrow, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Input from '../components/Input';
import { useState } from 'react';

export default function Kontakt(props) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = async () => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: email,
        name: name,
        title: title,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setFeedback('Došlo je do greške, molimo pokušajte ponovo.');
      return;
    }

    console.log(name, email, title, message);
    setFeedback('Hvala na upitu, javit ćemo se u najkraćem mogućem roku.');
    setName('');
    setEmail('');
    setTitle('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.modal} ${feedback && styles.active}`}>
        <div className={styles.modalContent}>
          <h1 className={styles.modalMessage}>{feedback}</h1>
          <button className={styles.button} style={{ width: '100%', margin: 0 }} onClick={() => setFeedback('')}>
            Zatvori
          </button>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.designerHeader} onClick={() => router.push('/usluge')} style={{ cursor: 'pointer' }}>
            • <span className={styles.line}></span>Kontakt
          </h2>
          <h1 className={styles.uslugeHeaderText}>Kontaktirajte nas</h1>
        </div>
      </div>
      <div className={styles.contentSpacerLeft}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> E-mail</span>
            <p> info@designpoint.hr</p>
          </div>
          <div className={styles.div2}>
            <FontAwesomeIcon icon={faPhone} />
            <span> Telefon</span>
            <p> 040 313 892</p>
          </div>
          <div className={styles.div3}>
            <FontAwesomeIcon icon={faLocationArrow} />
            <span> Lokacija</span>
            <p> Glavna 18c, Sveta Marija </p>
            <Link href="https://goo.gl/maps/U7Z5sNdnAXeHxUzX7" target="_blank" className={styles.mapLink}>
              Prikaži na karti
            </Link>
          </div>
          <div className={styles.div4}>
            <FontAwesomeIcon icon={faClock} />
            <span> Radno Vrijeme</span>
            <p> PON-PET: 7:00-15:00 </p>
            <p> uz prethodnu najavu</p>
          </div>
        </div>
      </div>
      <div className={styles.contentSpacerRight}>
        <h2>Kontaktirajte nas</h2>
        <p>Povratno ćemo Vam se javiti na email koji navedete u obrascu u roku od 48 sati.</p>
        <Input placeholder="Ime i Prezime" onChange={(e) => onNameChange(e)} value={name} />
        <Input placeholder="E-mail" onChange={(e) => onEmailChange(e)} value={email} />
        <Input placeholder="Naslov" onChange={(e) => onTitleChange(e)} value={title} />
        <Input placeholder="Upit" onChange={(e) => onMessageChange(e)} desc={false} value={message} />
        <button className={styles.button} style={{ width: '100%', margin: 0 }} onClick={() => sendEmail()}>
          Pošalji Upit
        </button>
      </div>
    </div>
  );
}
