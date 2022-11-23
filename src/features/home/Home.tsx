import React from 'react';
import styles from './Home.module.css';
import DefaultLayout from '../../layouts/DefaultLayout'
import Carousel from '../../commons/components/Carousel/Carousel';
import { ICarousel } from '../../commons/components/Carousel/carousel.type';
import { Link } from 'react-router-dom';
import ProductCollection from '../../commons/components/product/ProductContainer/ProductCollection';
import { IProduct } from '../../commons/components/product/ProductCard/ProductCard.type';



const initialCarouselData = [
  {
    imgUrl: "./images/banner/banner-lg-1.jpeg",
    url: "https://shopee.tw/m/2022lingeriefestival1115"
  },
  {
    imgUrl: "./images/banner/banner-lg-2.jpeg",
    url: "https://shopee.tw/m/xiaomisbd"
  },
  {
    imgUrl: "./images/banner/banner-lg-3.jpeg",
    url: "https://shopee.tw/m/b2c.20221114"
  }
];

const initialBannerRightData = [
  {
    imgUrl: "./images/banner/banner-sm-1.jpeg",
    url: "https://shopee.tw/m/2022lingeriefestival1115"
  },
  {
    imgUrl: "./images/banner/banner-sm-2.jpeg",
    url: "https://shopee.tw/m/xiaomisbd"
  },
];

const initialBannerListItems = [
  {
    id: 1,
    name: "免運！ 蝦皮直送",
    imgUrl: "/images/banner/bannerList/banner-icon-1.png",
    url: "https://shopee.tw/m/topshop"
  },
  {
    id: 2,
    name: "蝦皮超市",
    imgUrl: "/images/banner/bannerList/banner-icon-2.png",
    url: "https://shopee.tw/m/fmcgzone"
  },
  {
    id: 3,
    name: "快用全站9折",
    imgUrl: "/images/banner/bannerList/banner-icon-3.png",
    url: "https://shopee.tw/m/vouchers-1118#voucher9"
  },
  {
    id: 4,
    name: "整點搶1折券",
    imgUrl: "/images/banner/bannerList/banner-icon-4.png",
    url: "https://shopee.tw/m/electronicthree"
  },
  {
    id: 5,
    name: "蝦皮商城",
    imgUrl: "/images/banner/bannerList/banner-icon-5.png",
    url: "https://shopee.tw/mall"
  },
  {
    id: 6,
    name: "領3張免運券",
    imgUrl: "/images/banner/bannerList/banner-icon-6.png",
    url: "https://shopee.tw/m/free-shipping"
  },
  {
    id: 7,
    name: "蝦皮實名認證",
    imgUrl: "/images/banner/bannerList/banner-icon-7.png",
    url: "https://shopee.tw/m/kyc"
  },
  {
    id: 8,
    name: "蝦幣回饋",
    imgUrl: "/images/banner/bannerList/banner-icon-8.png",
    url: "https://shopee.tw/m/everydayCCB"
  },
  {
    id: 9,
    name: "超便宜$1起",
    imgUrl: "/images/banner/bannerList/banner-icon-9.png",
    url: "https://shopee.tw/m/superdeals"
  },
  {
    id: 10,
    name: "最強活動合集",
    imgUrl: "/images/banner/bannerList/banner-icon-10.png",
    url: "https://shopee.tw/campaigns"
  },
 
];

const initialProducts : IProduct[] = [
  {
    id: 1,
    imageUrls: ['https://cf.shopee.tw/file/2443267b4da34a1090811f96e3c6465e_tn'],
    description: '韓國工廠3d口罩 成人韓版3D立體口罩 防護口罩 防飛沫 KF94 白色口罩 面罩 防花妝 韓國口罩 網紅口罩 顯臉小',
    price: 100,
    sales: 125,
    discount: 0.65,
    rating: 25
  },
  {
    id: 2,
    imageUrls: ['https://cf.shopee.tw/file/49b789ed2032223c189f24bb4d40f21d_tn'],
    description: '❥韓版格子短版毛衣〔3色〕❥秋冬女裝新款韓版INS韓系女裝 女裝毛衣 短版毛衣 格子 格紋 秋裝 圓領毛衣 長袖針織上衣',
    price: 199,
    sales: 487,
    discount: 0,
    rating: 120
  },
  {
    id: 3,
    imageUrls: ['https://cf.shopee.tw/file/49b789ed2032223c189f24bb4d40f21d_tn'],
    description: '❥韓版格子短版毛衣',
    price: 199,
    sales: 487,
    discount: 0.85,
    rating: 120
  },
]

const Home : React.FC = () => {
  const carousels  : ICarousel[] = initialCarouselData;
  const bannerRights : ICarousel[] = initialBannerRightData;
  const products : IProduct[] = initialProducts;

  return (
    <DefaultLayout>
      {/* banner-section */}
      <div className={styles['banner-section']}>
        <div className="container">
          <div className={styles['banner']}>
            <div className={styles['banner-left']}>
              <Carousel data={carousels} />
            </div>
            <div className={styles['banner-right']}>
              {
                bannerRights?.map(subBanner => (
                  <div className={styles["banner-right_item"]}>
                    <Link to={`${subBanner.url}`}>
                      <div className='image' style={{ backgroundImage: `url('${subBanner.imgUrl}')` }}/>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>

          {/* banner-list */}
          <div className={styles['banner-list']}>
            {
              initialBannerListItems.map(item => (
                <a className={styles["banner-link"]} key={item.id} href={item.url}>
                  <div className={styles["banner-item"]}>
                    <div className={styles["banner-item_img"]} style={{ backgroundImage: `url('${item.imgUrl}')` }}></div>
                    <div className={styles["banner-item_text"]}>{item.name}</div>
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </div>

      {/* main */}
      <div className='container'>
        <div className={styles['banner-image']}>
          <img src="https://cf.shopee.tw/file/3414a0922616d41edc3ec767fd73b27f" alt="" />
        </div>
        <div className='hero'>Category List</div>
        <div className='hero'>
          <div className={styles['content-header']}>每日新發現</div>
          <ProductCollection products={products} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Home