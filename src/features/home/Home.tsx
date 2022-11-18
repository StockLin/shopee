import React from 'react';
import styles from './Home.module.css';
import DefaultLayout from '../../layouts/DefaultLayout'
import Carousel from '../../commons/components/Carousel/Carousel';
import { ICarousel } from '../../commons/components/Carousel/carousel.type';
import { Link } from 'react-router-dom';

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
 
]

const Home : React.FC = () => {
  const carousels  : ICarousel[] = initialCarouselData;
  const bannerRights : ICarousel[] = initialBannerRightData;

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
        <div>simeple-banner-image</div>
        <div>Category List</div>
        <div>Product List</div>
      </div>
    </DefaultLayout>
  )
}

export default Home