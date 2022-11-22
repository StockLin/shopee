import React from 'react';
import styles from './ProductCollection.module.css';
import { Col, Row } from 'antd';
import { IProduce } from 'immer/dist/internal';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

interface IProps {
  products?: IProduce[],
  children?: React.ReactNode
}

const ProductCollection : React.FC<IProps> = ({ products, children }) => {
  return (
    <div className={styles['product-collection']}>
      <Row gutter={[8, 8]}>
        {
          Array.from(Array(10).keys()).map(value => (
            <ProductCard key={value}/>
          ))
        }
        <Col span={24}>
          <Link to='/'>
            <div className={styles['product-more']}>查看更多</div>
          </Link>
        </Col>
        {/* TODO paginations */}
      </Row>
    </div>
  )
}

export default ProductCollection