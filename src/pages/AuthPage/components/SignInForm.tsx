import React from 'react';
import styles from '../AuthPage.module.scss'
import Photo from '../../../assets/img/Sign_in.png';

export const SignInForm: React.FC = () => {
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
      <h2>Sign In</h2>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
    </>
  );
};
