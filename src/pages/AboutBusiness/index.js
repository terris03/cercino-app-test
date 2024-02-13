import React from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import Input from 'components/Input';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const AboutBusiness = () => {
  const navigate = useNavigate();

  const renderAboutTopSection = () => {
    return (
      <div className={styles.aboutTopSectionStyles}>
        <Header
          headerDescpName={'Signup for business'}
          headerImgStyles={styles.overRideStyles}
        />
        <p className={styles.AboutHeaderTextStyles}>
          Join Cercino and Amplify Your Venue's Reach!
        </p>
        <p className={styles.AboutDe3scpTextStyles}>
          Create a business account to showcase your venue, manage events, and
          provide an unforgettable nightlife experience.
        </p>
        <div className={styles.aboutInputSectionStyles}>
          <p className={styles.tellUsTextStyles}>
            Tell us about your business*
          </p>
          <Input type={'text'} placeholder={'Name'} />
          <p className={styles.describeTextStyles}>
            Few Lines to Describe your Business*
          </p>
          <textarea
            placeholder={'Type here'}
            className={styles.textAreaStyles}
          />
        </div>
      </div>
    );
  };

  const renderButtonSection = () => {
    return <Button btName={'Next'} onClick={() => navigate('/businesstags')} />;
  };
  return (
    <div className={styles.aboutBusinessSection}>
      {renderAboutTopSection()}
      {renderButtonSection()}
    </div>
  );
};

export default AboutBusiness;
