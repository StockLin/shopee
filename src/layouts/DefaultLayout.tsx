import React from 'react';
import styles from './DefaultLayout.module.css';
import Header from '../commons/components/header/Header';
import Footer from '../commons/components/footer/Footer';


interface IProps {
  fixHeader?: boolean,
  children?: React.ReactNode
}


const DefaultLayout : React.FC<IProps> = ({ fixHeader=false, children }) => {
  return (
    <React.Fragment>
      <Header fixed={fixHeader} />

      { fixHeader && <div className={styles['clearfix']} /> }
      { children }

      <Footer />
    </React.Fragment>
  )
}

export default DefaultLayout