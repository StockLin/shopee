import React from 'react';
import styles from './ProductCollection.module.css';
import { Col, Row } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { IProduct } from '../ProductCard/ProductCard.type';

interface IProps {
  products?: IProduct[],
  children?: React.ReactNode
}

const ProductCollection : React.FC<IProps> = ({ products, children }) => {
  return (
    <div className={styles['product-collection']}>
      <Row gutter={[8, 8]}>
        {
          products?.map(product => (
            <ProductCard key={product.id} product={product} />
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