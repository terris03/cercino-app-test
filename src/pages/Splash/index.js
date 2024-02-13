import React, { useContext } from 'react';
import Header from 'components/Header';
import { AppDataContext } from 'providers/AppDataProvider';
import Button from 'components/Button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

  const renderMiddleSection = () => {
    return (
      <div className={styles.middleSectionStyles}>
        <p className={styles.middleDescpStyles}>
          {strings.introScreenStrings.introHeader}
        </p>
        <div className={styles.buttonSection}>
          <Button
            btName={strings.splashScreenStrings.userButton}
            onClick={() => navigate('/signin')}
          />
          <Button
            btName={strings.splashScreenStrings.businesButton}
            btnStyles={styles.bussinesBtnStyles}
            onClick={() => navigate('/signupbusiness')}
          />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.splashContainerStyles}>
      {renderMiddleSection()}
    </div>
  );
};

export default SplashScreen;
