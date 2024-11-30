import React from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  type: 'fullWidth' | 'containerWidth'; // Тип разделителя
}

const Divider: React.FC<DividerProps> = ({ type }) => {
  return <div className={`${styles.divider} ${styles[type]}`} />;
};

export default Divider;
