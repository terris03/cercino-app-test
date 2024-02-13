import React, { useContext, useState } from 'react';

import Header from 'components/Header';
import { AppDataContext } from 'providers/AppDataProvider';
import OTPInput from 'react-otp-input';
import styles from './styles.module.css';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const OtpScreen = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

  const [otp, setOtp] = useState('');

  const renderOtpBannerSection = () => {
    return (
      <div className={styles.bannerSectionStyles}>
        <Header headerDescpName={strings.signInStrings.bannerHeader} />
        <div className={styles.otpDescpStyles}>
          <p className={styles.otpHeaderTextStyles}>
            {strings.otpStrings.bannerHeader}
          </p>
          <p className={styles.otpDescpTextStyles}>
            {strings.otpStrings.bannerDescp}
          </p>
        </div>
        <div className={styles.verficationNumSectionStyles}>
          <OTPInput
            containerStyle={styles.verficationBoxStyles}
            // inputStyle={className={styles.verficationWidthStyles} , { width: '44px' }.join('')}
            inputStyle={{
              width: '44px',
              height: '52px',
              background: 'var(--gray14)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--white)',
              fontFamily: 'Futura-Medium',
              fontSize: '16px',
              fontWeight: '500',
            }}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="numeric"
            placeholder="____"
            renderInput={(props) => <input {...props} />}
          />
          <p className={styles.timerInputStyles}>00:30</p>
        </div>
      </div>
    );
  };

  const renderBottomSection = () => {
    return (
      <Button
        btnStyles={styles.verifyStyles}
        onClick={() => navigate('/setpassword')}
        btName={strings.otpStrings.verifyBtn}
        type="submit"
      />
    );
  };
  return (
    <div className={styles.otpScreenSection}>
      {renderOtpBannerSection()}
      {renderBottomSection()}
    </div>
  );
};

export default OtpScreen;
