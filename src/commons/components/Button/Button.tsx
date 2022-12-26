import React from 'react';
import styles from './Button.module.css';

interface IProps {
  type?: 'btn-primary' | 'btn-secondary';
  size?: 'btn-sm' | 'btn-md' | 'btn-lg';
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ type = 'btn-primary', size = 'btn-md', onClick, children }) => {
  return (
    <div
      className={`${styles['btn']} ${type && styles[type]} ${size && styles[size]}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button;