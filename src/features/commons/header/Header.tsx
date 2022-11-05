import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Divider, Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { BellOutlined, QuestionCircleOutlined, GlobalOutlined } from '@ant-design/icons';

interface IProps {
  fixed?: boolean
}

const Header : React.FC<IProps> = ({ fixed = false }) => {
  // TODO redux get noification data
  // TODO popover css

  const translateList = (
    <div className={styles['translate']}>
      <div className={styles['translate-item']}>繁體中文</div>
      <div className={styles['translate-item']}>English</div>
    </div>
  );

  const notificationList = (
    <p>List of noifications</p>
  );

  const HeaderItemDivider = (
    <Divider type='vertical' style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}/>
  );

  return (
    <header className={`${styles['header']} ${fixed ? styles['fixed'] : ''}`}>
      <div className='container'>
        <div className={styles['navbar']}>

          {/* left nav */}
          <div className={styles['nav']}>
            <div className={styles['nav-item']}>賣家中心</div>
            { HeaderItemDivider }
            <div className={styles['nav-item']}>下載</div>
            { HeaderItemDivider }
            <div className={styles['nav-item']}>追蹤我們</div>
            { HeaderItemDivider }
            <div className={styles['nav-item--icons_group']}>
              <i className="fa-brands fa-line"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          {/* right nav */}
          <div className={`${styles['nav']} ${styles['right']}`}>
            <Popover placement="bottom" content={notificationList}>
              <div className={styles['nav-item']}>
                <BellOutlined/> 通知總覽
              </div>
            </Popover>
            <div className={styles['nav-item']}>
              <QuestionCircleOutlined /> 幫助中心
            </div>
            <Popover placement="bottom" content={translateList}>
              <div className={styles['nav-item']}>
                <GlobalOutlined /> 繁體中文 <DownOutlined />
              </div>
            </Popover>

            {/* account toolbar */}
            <Link to='/account/register' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className={styles['nav-item']} style={{ marginRight: 0 }}>註冊</div>
            </Link>

            { HeaderItemDivider }

            <Link to='/account/login' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className={styles['nav-item']}>登入</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header