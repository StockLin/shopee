import React from 'react';
import styles from './Home.module.css';
import DefaultLayout from '../../layouts/DefaultLayout'
import Carousel from '../../commons/components/Carousel/Carousel';
import { ICarousel } from '../../commons/components/Carousel/carousel.type';
import { Link } from 'react-router-dom';
import ProductCollection from '../../commons/components/product/ProductConllection/ProductCollection';
import { IProduct } from '../../commons/components/product/ProductCard/ProductCard.type';
import CategoryCollection from '../../commons/components/CategoryCollection/CategoryCollection';
import { IitemCard } from '../../commons/components/ItemCard/ItemCard';


const initialCarouselData = [
  {
    id: 1,
    imgUrl: "./images/banner/banner-lg-1.jpeg",
    url: "https://shopee.tw/m/2022lingeriefestival1115"
  },
  {
    id: 2,
    imgUrl: "./images/banner/banner-lg-2.jpeg",
    url: "https://shopee.tw/m/xiaomisbd"
  },
  {
    id: 3,
    imgUrl: "./images/banner/banner-lg-3.jpeg",
    url: "https://shopee.tw/m/b2c.20221114"
  }
];

const initialBannerRightData = [
  {
    id: 1,
    imgUrl: "./images/banner/banner-sm-1.jpeg",
    url: "https://shopee.tw/m/2022lingeriefestival1115"
  },
  {
    id: 2,
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

const initialProducts: IProduct[] = [
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
];

const initialCategories: IitemCard[] = [
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/17f3879a1872099681d7b85101e187db_tn',
    name: '女生衣著',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/e47ff35a61d8e74bd3a54bbf1f65952c_tn',
    name: '男生衣著',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/1f86527d394e356d78a41c17108ec212_tn',
    name: '運動/健身',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/99ed4f6ef9a452a49c4070756d0048fb_tn',
    name: '男女鞋',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/1e4fbb940b5f4230458162f615a947b4_tn',
    name: '女生配件/黃金',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/227ec8335e695172de26c637ec8f8697_tn',
    name: '美妝保健',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/ee4b2cc17b24a6d00f522f0a52624982_tn',
    name: '嬰幼童與母親',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/a9fd9ed0217c33044cb15573f28ea805_tn',
    name: '女生包包/精品',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/e7edce689c35c47dc2ef0b5642fc0813_tn',
    name: '男生包包與配件',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/f83aeaa75e9081b1f19b92d4b70f616c_tn',
    name: '戶外/旅行',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/b1edb3defd6f3d59016fe881f6b9aab5_tn',
    name: '書籍',
    url: 'https://shopee.tw/%E6%9B%B8%E7%B1%8D%E5%8F%8A%E9%9B%9C%E8%AA%8C%E6%9C%9F%E5%88%8A-cat.11041120'
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/7f7b2a96de6739539bdf9b00108784c0_tn',
    name: '居家生活',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/4a20aaebe71427b3141fbaa186aaec16_tn',
    name: '美食、伴手禮',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/41e63c17a4e0412883fac61d94592268_tn',
    name: '汽機車零件百貨',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/2ce3822327a87bd4e3e96a131e5ea082_tn',
    name: '電玩遊戲',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/1071d365b731ef6e2619699c3b6d3492_tn',
    name: '娛樂、收藏',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/253830d7b66ebfc16b976c2f26643fa8_tn',
    name: '寵物',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/508706d0720263ce8ee415bce40d0d33_tn',
    name: '手機平板與周邊',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/c62e3d24ff3082424c0d1267508a1df9_tn',
    name: '3C與筆電',
    url: ''
  },
  {
    id: 1,
    imageUrl: 'https://cf.shopee.tw/file/7cc775aebb62745cd5c881d9bbff25a6_tn',
    name: '家電影音',
    url: ''
  },
].map((c, idx) => ({ ...c, id: idx }));


const Home: React.FC = () => {
  const carousels: ICarousel[] = initialCarouselData;
  const bannerRights: ICarousel[] = initialBannerRightData;
  const products: IProduct[] = initialProducts;
  const categories: IitemCard[] = initialCategories;

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
                bannerRights?.map((subBanner) => (
                  <div key={subBanner.id} className={styles["banner-right_item"]}>
                    <Link to={`${subBanner.url}`}>
                      <div className='image' style={{ backgroundImage: `url('${subBanner.imgUrl}')` }} />
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
        <div className='hero'>
          <CategoryCollection items={categories} />
        </div>
        <div className='hero'>
          <div className={styles['content-header']}>每日新發現</div>
          <ProductCollection products={products} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Home