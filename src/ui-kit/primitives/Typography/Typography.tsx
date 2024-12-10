import React, { FC, ReactNode } from 'react';
import styles from './Typography.module.css';
import clsx from 'clsx';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
type TypographyColor = 'primary' | 'secondary' | 'error' | 'black' | 'link' | 'warning';
type TypographyAlign = 'left' | 'center' | 'right';
type TypographyFont = 'volkov' | 'poppins' | 'jost';

interface TypographyProps {
  variant?: TypographyVariant; // Тип текста (заголовок или параграф)
  color?: TypographyColor;     // Цвет текста
  align?: TypographyAlign;     // Выравнивание текста
  font?: TypographyFont;       // Шрифт текста
  className?: string;          // Дополнительный CSS класс
  children: ReactNode;         // Контент
}

const Typography: FC<TypographyProps> = ({
  variant = 'p',
  color = 'primary',
  align = 'left',
  font = 'poppins',
  className,
  children,
}) => {
  const Component = variant;

  return (
    <Component
      className={clsx(
        styles.typography,
        styles[color],
        styles[align],
        styles[font],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
