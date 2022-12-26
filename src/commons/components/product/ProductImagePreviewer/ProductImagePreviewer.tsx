import React, { useEffect, useRef, useState } from 'react';
import styles from './ProductImagePreviewer.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface IProps {
  imageUrls: string[],
}

const ProductImagePreviewer : React.FC<IProps> = ({ imageUrls }) => {
  const imageListRef = useRef<any>();
  const [images, setImages] = useState<string[]>([]);
  const [targetImage, setTargeImage] = useState<string>('');

  useEffect(() => {
    setImages(imageUrls);
    setTargeImage(imageUrls[0]);
  }, [imageUrls]);

  const renderImageItem = (idx:number, url:string) => (
    <div
      key={idx}
      className={styles['image-item']}
      onMouseOver={() => setTargeImage(url)}
    >
      <div className='image-container'>
        <div className="image" style={{ backgroundImage: `url('${url}')`}}></div>
      </div>
    </div>
  );

  const scroll = (scrollOffset:number) => {
    imageListRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles['preview-container']}>

      {/* TODO 補mobile screen 左右slide */}
      <div className='image-container'>
        <div className="image" style={{ backgroundImage: `url('${targetImage}')`}}></div>
      </div>

      <div className={styles['image-toolbar']}>
        <div className={styles['arrow-left']} onClick={() => scroll(imageListRef.current.offsetWidth * 0.2 * -1)}><LeftOutlined/></div>
        <div className={styles['arrow-right']} onClick={() => scroll(imageListRef.current.offsetWidth * 0.2)}><RightOutlined/></div>

        <div ref={imageListRef} className={styles['image-list']}>
          { images.map((url, idx) => renderImageItem(idx, url) ) }
        </div>
      </div>
    </div>
  )
}

export default ProductImagePreviewer