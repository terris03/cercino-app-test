import React, { useContext } from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import { AppDataContext } from 'providers/AppDataProvider';
import Input from 'components/Input';
import Button from 'components/Button';
import { appleicon, googleicon } from 'resources/Images/images';
import { useFormik } from 'formik';
import { EmailValidationSchema } from 'validators/Validator';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const { strings } = useContext(AppDataContext);

  const handleSignUp = (values) => {
    console.log('emaill', values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: EmailValidationSchema,
    onSubmit: handleSignUp,
  });

  const renderSignInMiddleSection = () => {
    return (
      <div className={styles.bannerSignInSectionStyles}>
        <Header headerDescpName={strings.signInStrings.bannerHeader} />
        <div className={styles.signInMiddleSection}>
          {MiddleDescpSection()}
          {middleInputSection()}
        </div>
      </div>
    );
  };

  const MiddleDescpSection = () => {
    return (
      <div className={styles.descpStyles}>
        <p className={styles.descpOneStyles}>
          {strings.signInStrings.descpOne}
        </p>
        <p className={styles.descpTwoStyles}>
          {strings.signInStrings.descpTwo}
        </p>
      </div>
    );
  };

  const middleInputSection = () => {
    return (
      <div className={styles.signInInputStyles}>
        <p className={styles.signInMailTextStyles}>
          {strings.signInStrings.middleHeader}
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
          <div className={styles.gapTwoStyles}>
            <Button btName={strings.signInStrings.signInBtn} type="submit" />
            <p
              onClick={() => navigate('/login')}
              className={styles.alreadyLoginStyles}
            >
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
    <div className={styles.signInSection}>
      {renderSignInMiddleSection()}
      {renderSignInBotttomSection()}
    </div>
  );
};

export default SignIn;
