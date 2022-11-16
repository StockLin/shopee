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
                  <div className={styles["banner_right-item"]}>
                    {/* <Link to={`${subBanner.url}`}> */}
                      <div className='image' style={{ backgroundImage: `url('${subBanner.imgUrl}')` }}/>
                    {/* </Link> */}
                  </div>
                ))
              }
            </div>
          </div>

          <div>
            List icon Items
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