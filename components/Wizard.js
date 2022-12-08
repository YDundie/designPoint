import styles from '../styles/Wizard.module.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Button from './Button';

export default function Wizard(props) {
  const [step, setStep] = useState(1);

  const mandatorySteps = props.mandatorySteps || [];

  const nextStep = () => {
    setStep(step + 1);
    if (mandatorySteps.includes(step + 1)) {
      const status = getFromStorage(step + 1) === null;
      if (status) {
        setToStorage(step + 1, JSON.stringify({ status: 'failed' }));
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    if (mandatorySteps.includes(step - 1)) {
      const status = getFromStorage(step - 1) === null;
      if (status) {
        setToStorage(step - 1, JSON.stringify({ status: 'failed' }));
      }
    }
  };

  const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem(key));
    }
  };

  const setToStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.setItem(key, value);
    }
  };

  const { children } = props;
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={styles.wizard}>
      <div className={styles.closeWizard}>
        <span className={styles.closeButton} onClick={props.onClickClose}>
          X
        </span>
      </div>
      <div className={styles.wizardSteps}>
        {childrenArray.map((child, index) => {
          console.log('getFromStorage(index+1) :>> ', getFromStorage(index + 1));
          return (
            <div
              className={`${styles.wizardStep}`}
              onClick={() => {
                setStep(index + 1);
                if (mandatorySteps.includes(index + 1)) {
                  const status = getFromStorage(index + 1) === null;
                  if (status) {
                    setToStorage(index + 1, JSON.stringify({ status: 'failed' }));
                  }
                }
              }}
            >
              <div className={`${styles.wizardStepNumber} ${index + 1 === step ? styles.active : ''} ${getFromStorage(index + 1)?.status === 'done' ? styles.done : ''} ${getFromStorage(index + 1)?.status === 'failed' ? styles.failed : ''}`}>
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.wizardContent}>
        {childrenArray.map((child, index) => {
          if (index + 1 === step) {
            return React.cloneElement(child, { nextStep, prevStep, step });
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.wizardButtons}>
        <Button static onClick={prevStep} disabled={step === 1}>
          {`<`}
        </Button>
        <Button static onClick={nextStep} disabled={step === childrenArray.length}>
          {`>`}
        </Button>
      </div>
    </div>
  );
}
