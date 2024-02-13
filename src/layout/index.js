import React from 'react';
import styles from './styles.module.css';
import { applestoreicon, playstoreicon } from '../resources/Images/images';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const layOutSection = () => {
    return (
      <div className={styles.layOutSectionStyles}>
        <div className={styles.insideLayOutSectionStyles}>
          {layOutLeftSection()}
          <div className={styles.screen_outer}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const layOutLeftSection = () => {
    return (
      <div className={styles.layOutLeftStyles}>
        <h3 className={styles.bannerHeaderStyles}>
          To experience the full power of{' '}
          <span className={styles.spanyTextStyles}>Cercino</span>, open it on
          your mobile device.
        </h3>
        <p className={styles.bannerMiddleStyles}>
          Discover the city's nightlife, book events, and enjoy hassle-free
          access - all in the palm of your hand.
        </p>
      </div>
    );
  };

  return <div>{layOutSection()}</div>;
};

export default Layout;
