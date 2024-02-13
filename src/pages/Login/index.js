import React, { useContext } from 'react';
import styles from './styles.module.css';
import { appleicon, googleicon } from 'resources/Images/images';
import { AppDataContext } from 'providers/AppDataProvider';
import Header from 'components/Header';
import Input from 'components/Input';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

  const renderLoginBannerSection = () => {
    return (
      <div className={styles.bannerSectionStyles}>
        <div className={styles.bannerParaSectionStyles}>
          <Header headerDescpName={strings.loginStrings.loginHeader} back_dest={"/splash"} />
          <div className={styles.GapSectionStyles}>
            <p className={styles.bannerHeaderStyles}>
              {strings.loginStrings.header}
            </p>
            <p className={styles.bannerDescpStyles}>
              {strings.loginStrings.descp}
            </p>
          </div>
        </div>
        {loginFormSection()}
      </div>
    );
  };

  const loginFormSection = () => {
    return (
      <React.Fragment>
        <form className={styles.formSectionStyles}>
          {/* <div className={styles.formSectionStyles}> */}

          <div className={styles.formInputStyles}>
            <p className={styles.formTextStyles}>
              {strings.loginStrings.loginMail}
            </p>
            <Input type={'email'} placeholder={strings.loginStrings.emailId} />
            <Input type={'password'} placeholder={strings.loginStrings.pwd} />
          </div>
          <Button
            btName={strings.loginStrings.signInBtn}
            onClick={() => navigate('/home')}
          />
          <p className={styles.loginTextStyles}>
            <span className={styles.alreadyAccTextStyles}>
              {strings.loginStrings.dontAccount}
            </span>
            &nbsp;{strings.loginStrings.signUp}
          </p>

          {/* </div> */}
        </form>
      </React.Fragment>
    );
  };

  const renderSignInBotttomSection = () => {
    return (
      <div className={styles.bottomSectionStyles}>
        <div className={styles.orSectionStyles}>
          <p className={styles.borderOneStyles}></p>
          <p className={styles.orTextStyles}>{strings.signInStrings.or}</p>
          <p className={styles.borderTwoStyles}></p>
        </div>
        <div className={styles.imageSectionStyles}>
          <div className={styles.googleImgStyles}>
            <img
              src={googleicon}
              alt="googleicon"
              className={styles.imageWrapperStytles}
            />
          </div>
          <div className={styles.appleImgStyles}>
            <img
              src={appleicon}
              alt="appleicon"
              className={styles.imageWrapperStytles}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.loginSectionStyles}>
      {renderLoginBannerSection()}
      {renderSignInBotttomSection()}
    </div>
  );
};

export default Login;
