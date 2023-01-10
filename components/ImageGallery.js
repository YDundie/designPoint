import styles from '../styles/ImageGallery.module.css';
import React, { useState } from 'react';
import Button from './Button';
import { useEffect } from 'react';

function ImageGallery({ images }) {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    // 👇️ scroll to top on page load
    if (index === null) {
      window.document.getElementsByTagName('html')[0].style.overflow = 'auto';

      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }, [index]);

  function toggleClick(i) {
    if (index === i) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  }

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  function handlePrev() {
    setIndex((index + images.length - 1) % images.length);
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.imageGalleryContainer}>
        {images.map((image, i) => (
          <img src={image} className={`${styles.imageInGallery}`} onClick={() => toggleClick(i)} />
        ))}
      </div>

      {index !== null && (
        <div className={styles.backgroundContainer}>
          <div className={styles.backgroundOverlay} onClick={() => toggleClick(index)}></div>
          <img src={images[index]} className={styles.highlightedImage} onClick={() => toggleClick(index)} />
          <p className={styles.nextButton} onClick={() => handleNext()}>
            Sljedeća
          </p>
          <p className={styles.previousButton} onClick={() => handlePrev()}>
            Prethodna
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
