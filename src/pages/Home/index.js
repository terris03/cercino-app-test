import React from 'react';
import styles from './styles.module.css';
import Search from 'components/Search';
import List from 'components/List';
import { useNavigate } from 'react-router-dom';
import MapComponent from 'components/map.js';

const Home = () => {
  // const navigate = useNavigate();

  const homeSearchSection = () => {
    return <Search list_t={true} />;
  };

  return (
    <div className={styles.homeSection}>
      <MapComponent />
      <div className={styles.insideStyles}>
        {homeSearchSection()}
        <List value={0} />
      </div>
    </div>
  );
};

export default Home;
