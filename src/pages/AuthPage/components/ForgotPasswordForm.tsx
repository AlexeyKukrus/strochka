// ForgotPasswordForm.tsx
import React from 'react';

import Photo from '../../../assets/img/Sign_in.png';
import styles from '../AuthPage.module.scss'

export const ForgotPasswordForm: React.FC = () => {
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
        <h2>Forgot Password</h2>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </>
  );
};
