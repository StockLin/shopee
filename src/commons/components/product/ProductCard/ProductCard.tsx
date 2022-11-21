import { Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { IProduct } from './ProductCard.type';

interface IProps {
  product?: IProduct
}

const ProductCard : React.FC<IProps> = ({ product }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div className={styles['product']}>
        <Link to='/product/1'>
          <div className={styles['image-container']}>
            <div
              className={styles['image']}
              style={{ backgroundImage: `url(${"https://cf.shopee.tw/file/2443267b4da34a1090811f96e3c6465e_tn"})`}}
            ></div>
            {/* items on left top */}
            <div className={styles['tag-group']}>
              <div className={styles['tag-group__item']}>
                <img src="https://cf.shopee.tw/file/dd4133a3ec77edbfb6d2e3d43ada5174" alt="" />
              </div>
              <div className={styles['tag-group__item']}>
                <img src="https://cf.shopee.tw/file/1a9f5a575cc947912c880296f0f87f9b" alt="" />
              </div>
              <div className={styles['tag-group__item']}>
                <img src="https://cf.shopee.tw/file/ba4cc7c9de9ef2bbd802aae1fb538dc5" alt="" />
              </div>
            </div>
            {/* sales on right top */}
            <div className={styles['tag-discount']}>
              <span>95</span>
              <span>折</span>
            </div>
          </div>

          <div className={styles['product-content']}>
            <div className={styles['product-description']}>
              韓國工廠3d口罩 成人韓版3D立體口罩 防護口罩 防飛沫 KF94 白色口罩 面罩 防花妝 韓國口罩 網紅口罩 顯臉小
            </div>
            <div className={styles['product-extras']}>
              <div className={styles['product-price']}>$100</div>
              <div className={styles['product-sales']}>已售出 120</div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  )
}

export default ProductCard