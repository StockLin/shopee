import { Row } from 'antd';
import React from 'react';
import styles from './ProductContainer.module.css';

interface IProps {
  children?: React.ReactNode
}

const ProductContainer : React.FC<IProps> = ({ children }) => {
  return (
    <Row gutter={[8, 8]}>
      { children }
    </Row>
  )
}

export default ProductContainer