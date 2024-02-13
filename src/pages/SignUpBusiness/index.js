import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import { AppDataContext } from 'providers/AppDataProvider';
import Input from 'components/Input';
import Button from 'components/Button';
import { appleicon, googleicon } from 'resources/Images/images';
import { useFormik } from 'formik';
import { EmailValidationSchema } from 'validators/Validator';
import { useNavigate } from 'react-router-dom';

const SignUpBusiness = () => {
  const navigate = useNavigate();
  const { strings } = useContext(AppDataContext);

  const [show, setShow] = useState(false);
  const [termsAndCondition, setTermsAndCondition] = useState(true);

  const handleBusinessSignUp = (values) => {
    console.log('emaill', values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: EmailValidationSchema,
    onSubmit: handleBusinessSignUp,
  });

  const switchScreenSection = () => {
    return (
      <div className={styles.switchScreenStyles}>
        <Input type={'password'} name={'password'} placeholder={'Password'} />
        <div className={styles.terrmsAndConditions}>
          <div
            onClick={() => setTermsAndCondition(!termsAndCondition)}
            className={
              termsAndCondition
                ? styles.checkBoxStyles
                : styles.checkActiveBoxStyles
            }
          ></div>
          <p className={styles.termsTextStyles}>
            By signing up, you agree to our terms and condirions.
          </p>
        </div>
      </div>
    );
  };

  const renderBusinessMiddleSection = () => {
    return (
      <div className={styles.bannerBusinessSectionStyles}>
        <Header
          headerDescpName={'Signup for business'}
          headerImgStyles={styles.headerImgWidthStyles}
        />
        <div className={styles.businessMiddleSection}>
          {MiddleDescpSection()}
          {middleInputSection()}
        </div>
      </div>
    );
  };

  const MiddleDescpSection = () => {
    return (
      <div className={styles.descpBusinessStyles}>
        <p className={styles.descpOneStyles}>
          Join Cercino and Amplify Your Venue's Reach!
        </p>
        <p className={styles.descpTwoStyles}>
          Create a business account to showcase your venue, manage events, and
          provide an unforgettable nightlife experience.
        </p>
      </div>
    );
  };

  const middleInputSection = () => {
    return (
      <div className={styles.signUpBusinessInputStyles}>
        <p className={styles.businessMailTextStyles}>
          Signup with your business mail id*
        </p>
        {/* <div className={styles.gapOneStyles}> */}
        <form className={styles.gapOneStyles} onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            placeholder={strings.signInStrings.emailId}
            type={'email'}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldError('email', '')}
            error={formik.touched.email && formik.errors.email}
          />
          {show && switchScreenSection()}
          <div className={styles.gapTwoStyles}>
            <Button
              btnStyles={styles.nextBtnStyles}
              btName={'Next'}
              type="submit"
              onClick={
                show ? () => navigate('/aboutbusiness') : () => setShow(true)
              }
            />
            <p className={styles.alreadyLoginStyles}>
              <span className={styles.alreadyAccountStyles}>
                {strings.signInStrings.alreadyAccount} &nbsp;
              </span>
              {strings.signInStrings.login}
            </p>
          </div>
        </form>
      </div>
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
    <div className={styles.signUpBusinessSection}>
      {renderBusinessMiddleSection()}
      {!show && renderSignInBotttomSection()}
    </div>
  );
};

export default SignUpBusiness;
