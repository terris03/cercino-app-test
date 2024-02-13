import * as Yup from 'yup';

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('*Please enter a valid email.'),
});

export const PasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/,
      'Password must have 6 charcaters, 1 special charcater,1 capital'
    ),
});
