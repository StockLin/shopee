import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Divider, Popover, Input, Button, Dropdown, Menu } from 'antd';
import { DownOutlined, ShoppingCartOutlined, SearchOutlined, BellOutlined, QuestionCircleOutlined, GlobalOutlined } from '@ant-design/icons';

interface IProps {
  fixed?: boolean
}

const Header : React.FC<IProps> = ({ fixed = false }) => {
  const [translateItems, setTranslateItems] = useState<{id: number, name: string, value: string}[]>([
    { id: 1, name: '繁體中文', value: 'zh-TW' },
    { id: 2, name: 'English', value: 'en' },
  ]);
  const [searchKeywordItems, setSearchKeywordItems] = useState<string[]>([
    '手機殼', '口罩', '藍芽耳機', '雨衣', '襪子', '小米', '托鞋', '外套',
  ]);
  const [cartItems, setCartItems] = useState<{id: number, name: string}[]>([
    { id: 1, name: 'iPhone14 pro' },
    { id: 2, name: 'iPhone13 pro' },
    { id: 3, name: 'iPhone12 pro' },
  ]);

  // TODO redux get noification data
  // TODO popover css

  const renderTranslateItem = (
    <Menu>
      { translateItems?.map((item, idx) => <Menu.Item key={idx}>{item.name}</Menu.Item>) }
    </Menu>
  );

  const notificationList = (
    <p>List of noifications</p>
  );

  const HeaderItemDivider = (
    <Divider type='vertical' style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}/>
  );

  const renderCartItems = (
    <Menu>
      { cartItems?.map(item => <Menu.Item key={item.id}>{item.name}</Menu.Item>) }
    </Menu>
  )

  return (
    <header className={`${styles['header']} ${fixed ? styles['fixed'] : ''}`}>
      <div className='container'>
        {/* header navbar */}
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

            <div className={styles['nav-item']}>
              <Dropdown overlay={renderTranslateItem} placement="bottomRight">
                <div>
                  <GlobalOutlined /> 繁體中文 <DownOutlined />
                </div>
              </Dropdown>
            </div>

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

        {/* search bar */}
        <div className={styles['navbar-with-search']}>
          <Link to='/'>
            <div className={styles['logo']} style={{ backgroundImage: `url('./shopee-logo.png')` }}></div>
          </Link>
          <div className={styles['search-content']}>
            <div className={styles['seach-bar']}>
              <Input.Search
                size='large'
                allowClear
                defaultValue=""
                placeholder='註冊獲得全站優惠卷與免運!'
                enterButton={
                  <Button className={styles['btn-search-bar']} style={{ backgroundColor: '#ee4d2d', color: '#fff', fontWeight: 600 }}><SearchOutlined /></Button>
                }
              />
            </div>
            <div className={styles['search-keyword-items']}>
              { searchKeywordItems?.map((item, idx) => (
                <Link  key={idx} to={`/search?keyword=${item}`}>
                  <div className={styles['keyword-item']}>{item}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles['cart']}>
          <Dropdown overlay={renderCartItems} placement="bottomRight">
            <ShoppingCartOutlined />
          </Dropdown>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header