import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import { IProduct } from "../../commons/components/product/ProductCard/ProductCard.type";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Button, Divider, Input, Rate, Space } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ProductImagePreviewer from "../../commons/components/product/ProductImagePreviewer/ProductImagePreviewer";
import Tag from "../../commons/components/Tag/Tag";

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
];

// product detail view
const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    // fetch product detail by id
  }, [id]);

  return (
    <DefaultLayout>
      <div className="container">
        {/* product info card */}
        <div className={styles["product"]}>
          <div className={styles["product-images"]}>
            {/* image card */}
            <ProductImagePreviewer imageUrls={initialImageUrls} />
          </div>

          {/* Product content */}
          <div className={styles["product-content"]}>
            <span className={styles["product-header"]}>
              全新未拆封 歐珀 OPPO A57 /八核/5.2吋/雙卡 台版公司貨
              oppo手機超長保固
            </span>

            {/* ************************************ */}
            {/* ********* section subheader ************ */}
            {/* ************************************ */}
            <div className={styles["product-subheader"]}>
              <div className={styles["product-subheader__left"]}>
                {/* rating */}
                <div className={styles["product-subheader__item"]}>
                  <div className={styles["product-rate"]}>
                    <span className={styles["product-rate__value"]}>4.8</span>
                    <Rate
                      className={styles["product-rate__ratebar"]}
                      defaultValue={4.5}
                    />
                  </div>
                </div>
                <div className={styles["product-subheader__item"]}>
                  <a href="#!">88</a>
                  <span>評價</span>
                </div>
                <div className={styles["product-subheader__item"]}>
                  <a href="#!">120</a>
                  <span>已售出</span>
                </div>
              </div>

              <div className={styles["product-subheader__right"]}>
                <div className={styles["product-subheader__item"]}>
                  <a href="#!">檢舉此商品</a>
                </div>
              </div>
            </div>

            {/* ************************************ */}
            {/* ********* section price ************ */}
            {/* ************************************ */}
            <div className={styles["product-price"]}>
              <p className={styles["product-price__origin"]}>$100 - $200</p>
              <p className={styles["product-price__current"]}>$90 - $180</p>
              <p className={styles["product-price__discount"]}>4.2 折</p>
            </div>

            {/* ************************************ */}
            {/* ********* section subcontent ************ */}
            {/* ************************************ */}
            <div className={`${styles["product-subcontent"]}`}>
              <div className={`${styles["product-subcontent-item"]}`}>
                <div className={`${styles["title"]}`}>賣場優惠券</div>
                <div className={`${styles["content"]}`}>
                  <Tag title="現折$20" color="#EE4D2C" backgroundColor="#FCEDEE" />
                  <Tag title="現折$20" color="#EE4D2C" backgroundColor="#FCEDEE" />
                  <Tag title="現折$20" color="#EE4D2C" backgroundColor="#FCEDEE" />
                </div>
              </div>

              <div className={`${styles["product-subcontent-item"]}`}>
                <div className={`${styles["title"]}`}>促銷組合</div>
                <div className={`${styles["content"]}`}>
                  <Tag title="100件折 NT$20" color="#EE4D2C" border="1px solid #EE4D2C" />
                </div>
              </div>

              <div className={`${styles["product-subcontent-item"]}`}>
                <div className={`${styles["title"]}`}>運送</div>
                <div className={`${styles["content"]} ${styles["shipment-content"]}`}>
                  <div className={styles["product-shipment__item"]} style={{ color: '#EE4D2C' }}>
                    <i className="fa-solid fa-calendar-plus"></i> 較長備貨(出貨天數6 天)
                  </div>
                  {/* <div className={styles["product-shipment__item"]}>免運費</div> */}
                  <div className={styles["product-shipment__item"]}>
                    <div className={`flex ${styles["product-shipment__subitem"]} ${styles["product-shipment__method"]}`}>
                      <span><i className="fa-solid fa-truck"></i> 運送到</span>
                      <div>中正區, 臺北市</div>
                    </div>
                    <div className={`flex ${styles["product-shipment__subitem"]} ${styles["product-shipment__price"]}`}>
                      <span>運費</span>
                      <div>$39-$60</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles["product-spec-collection"]}`}>
                <div className={`${styles["product-subcontent-item"]} ${styles["product-spec"]}`}>
                  <div className={styles["title"]}>顏色</div>
                  <div className={`${styles["content"]}`}>
                    <div className={styles["product-spec-tag"]}>3D黑色 【10入一包】請按【數量下標</div>
                    <div className={styles["product-spec-tag"]}>3D黑色 【10入一包】請按【數量下標</div>
                    <div className={styles["product-spec-tag"]}>頭髮圈</div>
                    <div className={styles["product-spec-tag"]}>頭髮圈</div>
                    <div className={styles["product-spec-tag"]}>3D黑色 【10入一包】請按【數量下標</div>
                    <div className={styles["product-spec-tag"]}>3D黑色 【10入一包】請按【數量下標</div>
                    <div className={styles["product-spec-tag"]}>3D黑色 【10入一包】請按【數量下標</div>
                  </div>
                </div>

                <div className={`${styles["product-subcontent-item"]} ${styles["product-spec__quantity"]}`}>
                  <div className={`${styles["title"]}`}>數量</div>
                  <div className={`${styles["content"]}`}>
                    <div className={styles['qty-input']}>
                      <button onClick={() => setQuantity((quantity - 1) > 0 ? (quantity - 1) : 1)}><MinusOutlined /></button>
                      <input name='quantity' type="text" defaultValue={quantity} value={quantity} />
                      <button onClick={() => setQuantity((quantity + 1))}><PlusOutlined /></button>
                    </div>
                    還剩186037件
                  </div>
                </div>
              </div>

              <div className={`${styles["product-actions"]}`}>
                <div className={`${styles["btn"]} ${styles['btn-add-cart']}`}>
                  <i className="fa-solid fa-cart-plus"></i> 加入購物車
                </div>
                <div className={`${styles["btn"]} ${styles['btn-buy-now']}`}>
                  直接購買
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* manufacturer card */}
        <div className={styles["product-manufacturer"]}></div>

        {/* product spec & description card */}
        <div className={styles["product-extras"]}></div>

        {/* comment */}
        <div className={styles["product-comment"]}></div>
      </div>
    </DefaultLayout >
  );
};

export default Product;
