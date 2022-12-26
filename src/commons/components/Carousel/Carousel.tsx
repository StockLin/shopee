import React from 'react';
import styles from './Carousel.module.css';
import { Carousel as AntdCarousel } from 'antd';
import { ICarousel } from './carousel.type';
import { url } from 'inspector';

interface IProps {
  data: ICarousel[],
  autoPlay?: boolean
}

const Carousel : React.FC<IProps> = ({ data = [], autoPlay=true }) => {
  return (
    <AntdCarousel
      autoplay={autoPlay}
      style={{ width: '100%' }}
    >
      {
        data?.map((current, idx) => {
          return (
            <div key={idx} className={styles["caroursel-item"]}>
              <div className='image'style={{ backgroundImage: `url('${current.imgUrl}')` }} />
            </div>
          )
        })
      }
    </AntdCarousel>
  )
}

export default Carousel;