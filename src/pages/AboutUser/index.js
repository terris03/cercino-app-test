import Header from 'components/Header';
import styles from './styles.module.css';
import { AppDataContext } from 'providers/AppDataProvider';
import React, { useContext } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const AboutUser = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

  const aboutHeaderSection = () => {
    return <Header headerDescpName={strings.signInStrings.bannerHeader} />;
  };

  const aboutMiddleSection = () => {
    return (
      <div className={styles.middleSectionStyles}>
        <div className={styles.inputSectionStyles}>
          <p className={styles.tellAboutTextStyles}>
            {strings.aboutUserStrings.header}
          </p>
          <Input
            type={'text'}
            placeholder={strings.aboutUserStrings.yourName}
          />
          <div className={styles.gapSectionStyles}>
            <Input
              customInputStyle={styles.customInputNumStyles}
              type={'number'}
              onWheel={(event) => event.currentTarget.blur()}
              placeholder={strings.aboutUserStrings.phoneNum}
            />
            <Button btName={strings.aboutUserStrings.signInBtn} type="submit" />
          </div>
        </div>
        <p onClick={() => navigate('/login')} className={styles.skipTextStyles}>
          {strings.aboutUserStrings.skip}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.aboutUserSection}>
      {aboutHeaderSection()}
      {aboutMiddleSection()}
    </div>
  );
};

export default AboutUser;
