import React, { useState } from 'react';
import styles from './SignIn.module.css';
import Typography from '../../ui-kit/primitives/Typography/Typography';
import Photo from '../../assets/img/Sign_in.png';
import Google from '../../assets/img/Google.png';
import Mail from '../../assets/img/Mail.png';
import { Button } from '../../ui-kit/primitives/Button/Button';
import { Loader } from '../../ui-kit/primitives/Loader/Loader';

export const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true); // Запускаем лоадер
    setTimeout(() => {
      setIsLoading(false); // Выключаем лоадер
    
    }, 5000); // Тайм-аут 5 секунд
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img 
          src={Photo} 
          alt="Fashion Model" 
          className={styles.image} 
        />
      </div>
      <div className={styles.formSection}>
        <Typography className={styles.brand} variant="h1" color="primary" align="left" font="volkov">
          STROCHKA
        </Typography>
        <Typography className={styles.title} variant="h2" color="black" align="left" font="volkov">
          Sign in to Strochka
        </Typography>
        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>
            <img src={Google} alt="Google" />
            Sign up with Google
          </button>
          <button className={styles.socialButton}>
            <img src={Mail} alt="Email" />
            Sign up with Email
          </button>
        </div>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <form className={styles.form}>
          <input 
            type="email" 
            placeholder="Email" 
            className={styles.input} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className={styles.input} 
          />
          <Button 
            variant={isLoading ? 'white' : 'black'} 
            size="l" 
            onClick={handleSignIn} 
            disabled={isLoading} // Делаем кнопку недоступной во время загрузки
          >
            {isLoading ? 
              <Loader type="dots" size="small"></Loader> : 
              'Sign In'}
          </Button>
        </form>
        

        <div className={styles.links}>
          <a href="/register" className={styles.registerLink}>
            Register Now
          </a>
          <a href="/forgot-password" className={styles.forgotPasswordLink}>
            Forget Password?
          </a>
        </div>

        <footer className={styles.footer}>
          <Typography variant="p" color="black" align="center" font="poppins">
            Strochka 2023. Baku
          </Typography>
        </footer>
      </div>
    </div>
  );
};
