import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'black' | 'white' | 'blue';          // Стили кнопки
  size?: 'xs' | 's' | 'm' | 'l';                 // Размеры кнопки
  disabled?: boolean;                            // Отключена ли кнопка
  onClick?: () => void;                          // Обработчик клика
  children: React.ReactNode;                     // Текст или элементы внутри кнопки
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'black',
  size = 'm',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};