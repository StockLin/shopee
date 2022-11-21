import { Row } from 'antd';
import { IProduce } from 'immer/dist/internal';
import React from 'react';

interface IProps {
  products?: IProduce[],
  children?: React.ReactNode
}

const ProductContainer : React.FC<IProps> = ({ products, children }) => {
  return (
    <Row gutter={[8, 8]}>
      { children }
    </Row>
  )
}

export default ProductContainer