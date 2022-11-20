import React from 'react';
import styles from './DefaultLayout.module.css';
import Header from '../commons/components/Header/Header';
import Footer from '../commons/components/Footer/Footer';


interface IProps {
  fixHeader?: boolean,
  children?: React.ReactNode
}


const DefaultLayout : React.FC<IProps> = ({ fixHeader=false, children }) => {
  return (
    <React.Fragment>
      <Header fixed={fixHeader} />

      { fixHeader && <div className={styles['clearfix']} /> }

      <div className={styles['content']}>
        { children }
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default DefaultLayout