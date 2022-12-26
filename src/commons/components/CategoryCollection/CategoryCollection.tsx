import React from 'react';
import ItemCard, { IitemCard } from '../ItemCard/ItemCard';
import styles from './CategoryCollection.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface IProps {
  title?: string,
  items: IitemCard[]
}

const CategoryCollection: React.FC<IProps> = ({ title, items }) => {

  return (
    <div className={styles['collect']}>
      <h3 className={styles['collect-header']}>分類</h3>
      <div className={styles['collect-content']}>
        <div className={styles['collect-content__actions--left']}><LeftOutlined /></div>
        <div className={styles['collect-content__actions--right']}><RightOutlined /></div>

        {/* items */}
        <div className={styles['collect-content__items']}>
          {items?.map(item => <ItemCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  )
}

export default CategoryCollection;