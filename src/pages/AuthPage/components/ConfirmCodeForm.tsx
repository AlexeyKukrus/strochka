import React from 'react';

import Photo from '../../../assets/img/Sign_in.png';
import styles from '../AuthPage.module.scss'

export const ConfirmCodeForm: React.FC = () => {
  return (
    <>
      <div className={styles.imageSection}>
        <img 
          src={Photo} 
          alt="Fashion Model" 
          className={styles.image} 
        />
      </div>
      <form className={styles.formContainer}>
        <h2>Confirm Code</h2>
        <div>
          <label>Code</label>
          <input type="text" placeholder="Enter the code" />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};
