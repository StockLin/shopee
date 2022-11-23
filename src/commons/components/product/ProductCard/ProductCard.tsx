import { Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { IProduct } from './ProductCard.type';

interface IProps {
  product: IProduct
}

const ProductCard : React.FC<IProps> = ({ product }) => {
  const [discount, setDiscount] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(product.price);
  const [productImage, setProductImage] = useState<string>('./images/ImagePlaceholder.jpeg');

  useEffect(() => {
    if (product.discount) {
      setDiscount(product.discount * 100);
      setDiscountPrice(product.discount * product.price);
    }

    if (product.imageUrls.length > 0) {
      setProductImage(product.imageUrls[0]);
    }
  }, [product]);

  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div className={styles['product']}>
        <Link to={`/product/${product.id}`}>
          <div className={styles['image-container']}>
            <div
              className={styles['image']}
              style={{ backgroundImage: `url('${productImage}')`}}
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
            <div className={`${styles['tag-discount']} ${!discount && styles['hidden']}`}>
                <span>{discount}</span>
                <span>折</span>
            </div>
          </div>

          <div className={styles['product-content']}>
            <div className={styles['product-description']}>
              { product.description }
            </div>
            <div className={styles['product-extras']}>
              <div className={styles['product-price']}>${discountPrice}</div>
              <div className={styles['product-sales']}>已售出 {product.sales}</div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  )
}

export default ProductCard