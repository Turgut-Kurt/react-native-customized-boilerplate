import * as yup from 'yup';
const ForgotPasswordEmail = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçeri e-mail girin.')
    .max(40, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('E-mail gerekli'),
});
export default ForgotPasswordEmail;
