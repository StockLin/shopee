import React from 'react';
import styles from './ItemCard.module.css';

export interface IitemCard {
  id: string | number,
  imageUrl: string,
  name: string,
  url: string
}

interface IProps {
  data: IitemCard
}

const ItemCard: React.FC<IProps> = ({ data }) => {
  const { id, imageUrl, name, url } = data;
  return (
    <a href={url} className={styles['item-card']} target='__blank'>
      <div className={styles["item-card__image"]}>
        <div className='image-container'>
          <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
      </div>
      <div className={styles['item-card__name']}>
        {name}
      </div>
    </a>
  );
}

export default ItemCard