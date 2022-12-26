import React from 'react';
import styles from './Tag.module.css';

interface IProps {
  title: string,
  size?: number
  color?: string,
  backgroundColor?: string,
  border?: string
}

const Tag: React.FC<IProps> = ({ title, size = 14, color = 'black', backgroundColor = 'none', border = 'none' }) => {
  return (
    <div className={styles['tag']} style={{ color: color, backgroundColor: backgroundColor, border: border, fontSize: size }}>
      {title}
    </div>
  )
}

export default Tag