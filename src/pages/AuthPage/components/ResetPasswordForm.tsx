// ResetPasswordForm.tsx
import React from 'react';

import Photo from '../../../assets/img/Sign_in.png';
import styles from '../AuthPage.module.scss'

export const ResetPasswordForm: React.FC = () => {
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
        <h2>Reset Password</h2>
        <div>
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <div>
          <label>Confirm New Password</label>
          <input type="password" placeholder="Confirm new password" />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </>
  );
};
