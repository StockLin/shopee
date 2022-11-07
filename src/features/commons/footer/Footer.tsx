import React, { useState } from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { FacebookFilled, InstagramFilled, LinkedinFilled, WechatFilled, ShoppingOutlined } from '@ant-design/icons';

interface IFooterColumn {
  name: string | React.ReactNode,
  url?: string
}

const clientServiceFooterColumns = [
  { name: '幫助中心', url: '/' },
  { name: '蝦皮商城', url: '/' },
  { name: '付款方式', url: '/' },
  { name: '蝦皮錢包', url: '/' },
  { name: '蝦幣', url: '/' },
  { name: '運費補助', url: '/' },
  { name: '退貨退款', url: '/' },
  { name: '延長訂單撥款', url: '/' },
  { name: '聯絡客服', url: '/' },
  { name: '詐騙宣前', url: '/' }
];

const aboutShopeeFooterColumns = [
  { name: '關於蝦皮', url: '/' },
  { name: '加入我們', url: '/' },
  { name: '蝦皮條款', url: '/' },
  { name: '隱私權政策', url: '/' },
  { name: '蝦皮商城', url: '/' },
  { name: '賣家中心', url: '/' },
  { name: '限時特賣', url: '/' },
  { name: '聯絡媒體', url: '/' }
];

const aboutUsFooterColumns = [
  { name: <><FacebookFilled /> Facebook</>, url: '/' },
  { name: <><InstagramFilled /> Instagram</>, url: '/' },
  { name: <><LinkedinFilled /> Linkedin</>, url: '/' },
  { name: <><WechatFilled /> WeChat</>, url: '/' },
  { name: <><ShoppingOutlined /> 蝦皮輯部落格</>, url: '/' }
];

const Footer : React.FC = () => {
  const [columns, setColumns] = useState<IFooterColumn[]>([
    { name: '幫助中心', url: '/' },
    { name: '蝦皮商城', url: '/' },
    { name: '付款方式', url: '/' }
  ])

  const renderFooterColumns = (title:string='', columns:IFooterColumn[]=[]) => {
    return (
      <div className={styles["footer-column"]}>
        <div className={styles["title"]}>{title}</div>
        { columns.map((col, idx) => (
          <Link key={idx} to={col.url ?? ''}>
            <div className={styles['item']}>
              {col.name}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles["footer-section"]}>
          {/* 客服中心 */}
          { renderFooterColumns('客服中心', clientServiceFooterColumns) }

          {/* 關於蝦皮 */}
          { renderFooterColumns('關於蝦皮', aboutShopeeFooterColumns) }
          
          {/* 付款 */}
          <div className={styles['footer-column-group']}>
            <div className={styles["footer-column"]}>
              <div className={styles["title"]}>付款</div>
              <div className={styles["images"]}>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/08cad757b16c285bbd768870cb08cf53" alt="" /></a></div>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/c89f5e400512b891bd3dbd9ee25c120e" alt="" /></a></div>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/c59294a3e42f921b8c97a1833234fa0e" alt="" /></a></div>
              </div>
            </div>
            <div className={styles["footer-column"]}>
              <div className={styles["title"]}>物流合作</div>
              <div className={styles["images"]}>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/fcce0621aec0a5409c1e7d5252cfd136" alt="" /></a></div>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/f316a8e81ba98aa684d0f278be9c4c05" alt="" /></a></div>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/86bf82557d870ef093cc511ae243a59c" alt="" /></a></div>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/5962f1962d9b6ad7a0536c5dca9adb45" alt="" /></a></div>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/872bb8711db001a33e0e03e21860cbb0" alt="" /></a></div>
              </div>
            </div>
            <div className={styles["footer-column"]}>
              <div className={styles["title"]}>蝦皮直送包裝減量標章</div>
              <div className={styles["images"]}>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/f53618ce2c31cba7a71e4ea4fa08e93c" alt="" /></a></div>
              </div>
            </div>
          </div>

          {/* 關注我們 */}
          { renderFooterColumns('關注我們', aboutUsFooterColumns) }

          {/* 下載蝦皮 */}
          <div className={styles['footer-column-group']}>
            <div className={styles["footer-column"]}>
              <div className={styles["title"]}>下載蝦皮</div>
              <div className={styles["images"]}>
                <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/4b01eb6a8fb3e25d7bca3805e1ebf3a4" alt="" /></a></div>
                <div>
                  <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/4e4f8912bf8ff66be5c95fb2fe945358" alt="" /></a></div>
                  <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/dc9067c7bbb920656633cdca0cf40e6c" alt="" /></a></div>
                  <div className={styles["image-item"]}><a href="#!"><img src="https://cf.shopee.tw/file/a28a7b61236921ec5b618815dafed1f8" alt="" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Divider/> */}
        <div className={styles["footer-sub-section"]}>
          <div className={styles["copyright"]}>© 2022 Shopee. 版權所有。</div>
          <div className={styles["location"]}>
            <div className={styles["title"]}>國家和地區:</div>
            <ul className={styles["items"]}>
              <li><a href="#!">台灣</a></li>
              <li><a href="#!">台灣</a></li>
              <li><a href="#!">台灣</a></li>
              <li><a href="#!">台灣</a></li>
              <li><a href="#!">台灣</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer