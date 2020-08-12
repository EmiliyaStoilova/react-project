import React from 'react';
import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
  return (
    <div className={styles.app}>
      <Header />
        <div className={styles.container}>
          {props.children}
        </div>
      <Footer />
    </div>
  );
}

export default Layout;