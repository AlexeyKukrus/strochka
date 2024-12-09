import React from 'react';

import Photo from '../../../assets/img/Sign_up.png';
import styles from '../AuthPage.module.scss'

export const SignUpForm: React.FC = () => {
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
        <h2>Sign Up</h2>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
