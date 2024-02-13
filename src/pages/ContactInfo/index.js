import React from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import Input from 'components/Input';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const ContactInfo = () => {
  const navigate = useNavigate();

  const renderContactTopSection = () => {
    return (
      <div className={styles.contactTopStyles}>
        <Header
          headerDescpName={'Signup for business'}
          headerImgStyles={styles.overRideStyles}
        />

        <div className={styles.contactInputSecStyles}>
          <p className={styles.contactTextyStyles}>Contact Information*</p>
          <Input type={'text'} placeholder={'Name'} />
          <Input
            type={'number'}
            placeholder={'Phone number'}
            onWheel={(event) => event.currentTarget.blur()}
            customInputStyle={styles.overRideNumStyles}
          />
          <Input type={'text'} placeholder={'Role'} />
        </div>
        <div className={styles.emailInputSecStyles}>
          <p className={styles.emailTextStyles}>Email*</p>
          <Input type={'email'} placeholder={'Email id'} />
        </div>
      </div>
    );
  };

  const renderContactBottomSection = () => {
    return <Button onClick={() => navigate('/events')} btName={'Next'} />;
  };

  return (
    // <form style={{ height: '100%' }}>
    <div className={styles.contactInfoSection}>
      {renderContactTopSection()}
      {renderContactBottomSection()}
    </div>
    // </form>
  );
};

export default ContactInfo;
