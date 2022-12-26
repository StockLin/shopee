import React, { useState } from 'react';
import styles from './Login.module.css';
import Footer from '../../commons/components/Footer/Footer';
import { Button, Divider } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login : React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'register'>('login');
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <div>
      <header>
        <div className='container'>
          <div className={styles["login-header"]}>
            <div className={styles["header-left"]}>
              <Link to='/'>
                <img className={styles['header-image']} src="/shopee-logo2.png" alt="logo" />
              </Link>
            </div>
            <div className={styles["header-right"]}>
              <a href="#!" target={'_blank'}>需要幫助?</a>
            </div>
          </div>
        </div>
      </header>

      <div className={styles['main']}>
        <div className='container'>
          <div className={styles['main-content']} style={{ backgroundImage: `url('https://cf.shopee.tw/file/407e3f72d67dc2e5fa09ff778a28349e')`}}>
            <div className={styles['login-content']}>
              <div className={styles['login-content__title']}>登入</div>
              <form className={styles['login-content__form']} action="">
                {
                  errorMessage &&
                  <div className={styles["login-content__form--message"]}>
                    <div className={styles.icon}>
                      <CloseCircleOutlined />
                    </div>
                    { errorMessage }
                  </div>
                }
                <input type="text" placeholder='電話號碼/使用者名稱/Email' />
                <input type="password" placeholder='密碼' />
                <Button className={styles['btn-login']} >登入</Button>

                <div className={styles['login-content__form__extras']}>
                  <a href="#!">忘記密碼</a>
                  <a href="#!">使用SMS簡訊登入</a>
                </div>
              </form>
            
              <Divider style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 12 }}>或</Divider>

              <div className={styles["oauth-login"]}>
                <div className={styles["oauth-login__item"]}><i className="fa-brands fa-facebook"></i> Facebook</div>
                <div className={styles["oauth-login__item"]}><i className="fa-brands fa-google"></i> Google</div>
                <div className={styles["oauth-login__item"]}><i className="fa-brands fa-apple"></i> Apple</div>
              </div>

              <div className={styles["new-member"]}>
                蝦皮新朋友？ <span onClick={() => setFormType('login')}>註冊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login;