// SignUpForm.tsx
import React, { useState } from 'react';
import Photo from '../../../assets/img/Sign_up.png';
import styles from '../AuthPage.module.scss';
import { createUserMethod } from '../../../api/auth'; // Импорт метода для создания пользователя
import { useNavigate } from 'react-router-dom';

export const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  // Функция для обработки отправки формы
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      const newUser = await createUserMethod(username, email, password); // Создание нового пользователя
      setSuccessMessage('Пользователь успешно создан!');
      console.log(newUser)
      navigate("/sign-in")
    } catch (error: any) {
      setError('Не удалось создать пользователя. Попробуйте еще раз.');
      console.error(error);
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
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className={styles.error}>{error}</div>}
        {successMessage && <div className={styles.success}>{successMessage}</div>}
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
          <label>Username</label>
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
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
        <div>
          <label>Confirm Password</label>
          <input 
            type="password" 
            placeholder="Confirm your password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
