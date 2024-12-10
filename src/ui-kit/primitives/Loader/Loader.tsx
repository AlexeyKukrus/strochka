import React from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'; // Размер лоадера
  type?: 'ring' | 'dots'; // Тип анимации
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  type = 'ring',
}) => {
  return (
    <div className={`${styles.loader} ${styles[size]}`}>
      {type === 'ring' ? (
        <div className={styles.ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.dots}>
          <span className={styles.black}></span>
          <span className={styles.gray}></span>
          <span className={styles.blue}></span>
        </div>
      )}
    </div>
  );
};
