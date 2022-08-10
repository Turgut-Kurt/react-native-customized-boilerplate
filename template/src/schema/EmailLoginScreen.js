import * as yup from 'yup';
const EmailLoginScreen = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçeri e-mail girin.')
    .max(40, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('E-mail gerekli'),
  password: yup
    .string()
    .min(6, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Şifre zorunlu'),
});
export default EmailLoginScreen;
