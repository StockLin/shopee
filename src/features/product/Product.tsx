import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import { IProduct } from "../../commons/components/product/ProductCard/ProductCard.type";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Rate } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ProductImagePreviewer from "../../commons/components/product/ProductImagePreviewer/ProductImagePreviewer";
import Tag from "../../commons/components/Tag/Tag";
import Button from "../../commons/components/Button/Button";
import ProductManufacturerCard from "../../commons/components/product/ProductManufacturerCard/ProductManufacturerCard";
import { IComment } from "../../commons/components/comments/Comment/Comment";
import CommentList from "../../commons/components/comments/CommentList/CommentList";

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
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    // fetch product detail by id

    // fetch comment
    const mockComments: IComment[] = Array.from(Array(5).keys()).map((_, idx) => ({
      id: idx,
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit molestias eligendi natus aliquam laudantium asperiores pariatur. Necessitatibus, minus repudiandae.',
      createdBy: `tester-${idx}`,
      createdAt: '2022-12-23'
    }));

    setComments(mockComments)
  }, [id]);

  return (
    <DefaultLayout>
      <div className="container">
        {/* product info card */}
        <div className="hero">
          <div className={styles["product"]}>
            <div className={styles["product-images"]}>
              {/* image card */}
              <ProductImagePreviewer imageUrls={initialImageUrls} />
            </div>

            {/* Product content */}
            <div className={styles["product-content"]}>
              <span className={styles["product-header"]}>
                ??????????????? ?????? OPPO A57 /??????/5.2???/?????? ???????????????
                oppo??????????????????
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
                    <span>??????</span>
                  </div>
                  <div className={styles["product-subheader__item"]}>
                    <a href="#!">120</a>
                    <span>?????????</span>
                  </div>
                </div>

                <div className={styles["product-subheader__right"]}>
                  <div className={styles["product-subheader__item"]}>
                    <a href="#!">???????????????</a>
                  </div>
                </div>
              </div>

              {/* ************************************ */}
              {/* ********* section price ************ */}
              {/* ************************************ */}
              <div className={styles["product-price"]}>
                <p className={styles["product-price__origin"]}>$100 - $200</p>
                <p className={styles["product-price__current"]}>$90 - $180</p>
                <p className={styles["product-price__discount"]}>4.2 ???</p>
              </div>

              {/* ************************************ */}
              {/* ********* section subcontent ************ */}
              {/* ************************************ */}
              <div className={`${styles["product-subcontent"]}`}>
                <div className={`${styles["product-subcontent-item"]}`}>
                  <div className={`${styles["title"]}`}>???????????????</div>
                  <div className={`${styles["content"]}`}>
                    <Tag title="??????$20" color="#EE4D2C" backgroundColor="#FCEDEE" />
                    <Tag title="??????$20" color="#EE4D2C" backgroundColor="#FCEDEE" />
                    <Tag title="??????$20" color="#EE4D2C" backgroundColor="#FCEDEE" />
                  </div>
                </div>

                <div className={`${styles["product-subcontent-item"]}`}>
                  <div className={`${styles["title"]}`}>????????????</div>
                  <div className={`${styles["content"]}`}>
                    <Tag title="100?????? NT$20" color="#EE4D2C" border="1px solid #EE4D2C" />
                  </div>
                </div>

                <div className={`${styles["product-subcontent-item"]}`}>
                  <div className={`${styles["title"]}`}>??????</div>
                  <div className={`${styles["content"]} ${styles["shipment-content"]}`}>
                    <div className={styles["product-shipment__item"]} style={{ color: '#EE4D2C' }}>
                      <i className="fa-solid fa-calendar-plus"></i> ????????????(????????????6 ???)
                    </div>
                    {/* <div className={styles["product-shipment__item"]}>?????????</div> */}
                    <div className={styles["product-shipment__item"]}>
                      <div className={`flex ${styles["product-shipment__subitem"]} ${styles["product-shipment__method"]}`}>
                        <span><i className="fa-solid fa-truck"></i> ?????????</span>
                        <div>?????????, ?????????</div>
                      </div>
                      <div className={`flex ${styles["product-shipment__subitem"]} ${styles["product-shipment__price"]}`}>
                        <span>??????</span>
                        <div>$39-$60</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles["product-spec-collection"]}`}>
                  <div className={`${styles["product-subcontent-item"]} ${styles["product-spec"]}`}>
                    <div className={styles["title"]}>??????</div>
                    <div className={`${styles["content"]}`}>
                      <div className={styles["product-spec-tag"]}>3D?????? ???10?????????????????????????????????</div>
                      <div className={styles["product-spec-tag"]}>3D?????? ???10?????????????????????????????????</div>
                      <div className={styles["product-spec-tag"]}>?????????</div>
                      <div className={styles["product-spec-tag"]}>?????????</div>
                      <div className={styles["product-spec-tag"]}>3D?????? ???10?????????????????????????????????</div>
                      <div className={styles["product-spec-tag"]}>3D?????? ???10?????????????????????????????????</div>
                      <div className={styles["product-spec-tag"]}>3D?????? ???10?????????????????????????????????</div>
                    </div>
                  </div>

                  <div className={`${styles["product-subcontent-item"]} ${styles["product-spec__quantity"]}`}>
                    <div className={`${styles["title"]}`}>??????</div>
                    <div className={`${styles["content"]}`}>
                      <div className={styles['qty-input']}>
                        <button onClick={() => setQuantity((quantity - 1) > 0 ? (quantity - 1) : 1)}><MinusOutlined /></button>
                        <input name='quantity' type="text" onChange={() => { }} value={quantity} />
                        <button onClick={() => setQuantity((quantity + 1))}><PlusOutlined /></button>
                      </div>
                      ??????186037???
                    </div>
                  </div>
                </div>

                <div className={`${styles["product-actions"]}`}>
                  <Button type="btn-secondary" size="btn-lg">
                    <i className="fa-solid fa-cart-plus"></i> ???????????????
                  </Button>
                  <Button size="btn-lg"> ???????????? </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* manufacturer card */}
        <div className="hero">
          <ProductManufacturerCard />
        </div>

        {/* product spec & description card */}
        <div className={styles["product-extras"]}></div>

        {/* comment */}
        <div className="hero">
          <div className={styles["product-comment"]}>
            <h3>????????????</h3>
            <CommentList comments={comments} />
          </div>
        </div>
      </div>
    </DefaultLayout >
  );
};

export default Product;
