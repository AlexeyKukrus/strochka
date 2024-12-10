// SignInForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Photo from '../../../assets/img/Sign_in.png';

import styles from '../AuthPage.module.scss';
import { postLoginMethod } from '../../../api/auth';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await postLoginMethod(email, password);
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (err) {
      setError('Ошибка авторизации');
    }
  };

  return (
    <>
      <div className={styles.imageSection}>
        <img 
          src={Photo} 
          alt="Fashion Model" 
          className={styles.image} 
        />
      </div>
      <form className={styles.formContainer} onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Sign In</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  );
};

