import * as yup from 'yup';
const ForgotPasswordPhone = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(10, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Telefon numarası zorunlu'),
});
export default ForgotPasswordPhone;
