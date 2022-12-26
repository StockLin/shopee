import React from 'react';
import Button from '../../Button/Button';
import styles from './ProductManufacturerCard.module.css';

const ProductManufacturerCard: React.FC = () => {
  return (
    <div className={styles["manufacturer"]}>

      <div className={styles["manufacturer-info"]}>
        <div className={styles["avatar"]}>
          <div className="image-container round">
            <div className="image" style={{ backgroundImage: `url('https://cf.shopee.tw/file/977a502c6992250847ec400ba5f927e1_tn')` }}></div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["name"]}>
            <span>官方購物車</span>
            <span>39小時前上線</span>
          </div>
          <div className={styles["contacts"]}>
            <Button type="btn-secondary">
              <i className="fa-sharp fa-solid fa-message"></i> 聊聊
            </Button>
            <Button>
              <i className="fa-sharp fa-solid fa-store"></i> 查看賣場
            </Button>
          </div>
        </div>
      </div>

      <div className={styles["manufacturer-details"]}>
        <div className={styles["manufacturer-item"]}>
          <div className={styles["content"]}>
            <label>商品評價</label> <span>2萬</span>
          </div>
        </div>
        <div className={styles["manufacturer-item"]}>
          <div className={styles["content"]}>
            <label>聊聊回應率</label> <span>85%</span>
          </div>
        </div>
        <div className={styles["manufacturer-item"]}>
          <div className={styles["content"]}>
            <label>加入時間</label> <span>9個月 前</span>
          </div>
        </div>
        <div className={styles["manufacturer-item"]}>
          <div className={styles["content"]}>
            <label>商品</label> <span>35</span>
          </div>
        </div>
        <div className={styles["manufacturer-item"]}>
          <div className={styles["content"]}>
            <label>回應速度</label> <span>幾小時內</span>
          </div>
        </div>
        <div className={styles["manufacturer-item"]}>
          <div className={styles["content"]}>
            <label>紛絲</label> <span>1.4萬</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductManufacturerCard