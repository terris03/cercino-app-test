import React, { useContext } from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import { AppDataContext } from 'providers/AppDataProvider';
import Input from 'components/Input';
import { useFormik } from 'formik';
import { PasswordValidationSchema } from 'validators/Validator';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const SetPassword = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('password', values);
  };

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: PasswordValidationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <React.Fragment>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.setPasswordSection}
      >
        {/* <div className={styles.setPasswordSection}> */}
        <div className={styles.headerGapStyles}>
          <Header headerDescpName={strings.signInStrings.bannerHeader} />
          <div className={styles.setPasswordStyles}>
            <div className={styles.setNewPassWordStyles}>
              <p className={styles.setNewPassWordTextStyles}>
                {strings.setPasswordStrings.setPwd}
              </p>
              <Input
                type={'password'}
                placeholder={strings.setPasswordStrings.inputPwd}
                name={'password'}
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // onFocus={() => formik.setFieldError('password', '')}
                // error={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className={styles.confirmPassWordStyles}>
              <p className={styles.confirmPassWordTextStyles}>
                {strings.setPasswordStrings.confirmPwd}
              </p>
              <Input
                type={'password'}
                placeholder={strings.setPasswordStrings.inputPwd}
                name={'password'}
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // onFocus={() => formik.setFieldError('password', '')}
                // error={formik.touched.password && formik.errors.password}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        <Button
          onClick={() => navigate('/aboutuser')}
          btName={strings.setPasswordStrings.setPwdBtn}
          type="submit"
        />
      </form>
    </React.Fragment>
  );
};

export default SetPassword;
