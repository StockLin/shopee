import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../commons/components/product/ProductCard/ProductCard.type';
import DefaultLayout from '../../layouts/DefaultLayout'
import { Divider, Input, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ProductImagePreviewer from '../../commons/components/product/ProductImagePreviewer/ProductImagePreviewer';


const initialImageUrls = [
  "https://cf.shopee.tw/file/2443267b4da34a1090811f96e3c6465e_tn",
  "https://cf.shopee.tw/file/320b2caa8c7ecd868b37a38efa2e0c2e_tn",
  "https://cf.shopee.tw/file/2443267b4da34a1090811f96e3c6465e_tn",
  "https://cf.shopee.tw/file/320b2caa8c7ecd868b37a38efa2e0c2e_tn",
  "https://cf.shopee.tw/file/2443267b4da34a1090811f96e3c6465e_tn",
  "https://cf.shopee.tw/file/320b2caa8c7ecd868b37a38efa2e0c2e_tn",
  "https://cf.shopee.tw/file/320b2caa8c7ecd868b37a38efa2e0c2e_tn",
  "https://cf.shopee.tw/file/320b2caa8c7ecd868b37a38efa2e0c2e_tn",
  "https://cf.shopee.tw/file/320b2caa8c7ecd868b37a38efa2e0c2e_tn",
]

// product detail view
const Product : React.FC = () => {
  const { id } = useParams<{id:string}>();
  const [product, setProduct] = useState<IProduct|null>(null);

  useEffect(() => {
    // fetch product detail by id
  }, [id]);

  return (
    <DefaultLayout>
      <div className="container">
          {/* product info card */}
          <div className={styles['product']}>
            <div className={styles['product-images']}>
              {/* image card */}
              <ProductImagePreviewer imageUrls={initialImageUrls}/>
            </div>
            <div className={styles['product-content']}>
              <h3 className={styles['product-header']}>全新未拆封 歐珀 OPPO A57 /八核/5.2吋/雙卡 台版公司貨 oppo手機超長保固</h3>
              <div className={styles['product-subheader']}>
                <Space direction='horizontal' split={<Divider type='vertical'/>}>
                  {/* rating */}
                  <Space><div>Ratings</div></Space>
                  <Space><a href='#!'>88</a><span>評價</span></Space>
                  <Space><a href='#!'>120</a><span>已售出</span></Space>
                </Space>
                <a href="#!">檢舉此商品</a>
              </div>

              <div className={styles['product-price']}>
                <p>$100 - $200</p>
                <p>$90 - $180</p>
                <p>4.2折</p>
              </div>

              <div className={styles['product-coupons']}>

              </div>

              <div className={styles['product-shipment']}>

              </div>

              <div className={styles['product-spec-collection']}>
                <div className={styles['product-spec']}>
                  <div className={styles['product-spec__title']}>顏色</div>
                  <div className={styles['product-spec__item']}>
                    <div className={styles['tag']}>TAG1</div>
                    <div className={styles['tag']}>TAG1</div>
                    <div className={styles['tag']}>TAG1</div>
                  </div>
                  <div className={styles['product-spec__number']}>
                    <Input />
                    還剩186037件
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* manufacturer card */}
          <div className={styles['product-manufacturer']}>

          </div>

          {/* product spec & description card */}
          <div className={styles['product-extras']}>

          </div>


          {/* comment */}
          <div className={styles['product-comment']}>

          </div>
      </div>
    </DefaultLayout>
  )
}

export default Product;