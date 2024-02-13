import React, { useContext, useEffect } from 'react';
import styles from './styles.module.css';
import { AppDataContext } from 'providers/AppDataProvider';
import { useNavigate } from 'react-router-dom';

const IntroScreen = () => {
  const navigate = useNavigate();
  const { strings } = useContext(AppDataContext);
  useEffect(() => {
    setTimeout(() => {
      navigate('/splash');
    }, 1500);
  }, []);

  return (
    <div className={styles.introScreenStyles}>
      <div className={styles.introTextStyles}>
        <p className={styles.introHeaderStyles}>
          {strings.introScreenStrings.introHeader}
        </p>
        <div className={styles.center}>
          <div className={`${styles.center} ${styles.center_loading}`}>
            <div className={styles.center_loading_inner} style={{'--size':'25px','--index':'1'}}></div>
            <div className={styles.center_loading_inner} style={{'--size':'50px','--index':'2'}}></div>
            <div className={styles.center_loading_inner} style={{'--size':'25px','--index':'3'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
