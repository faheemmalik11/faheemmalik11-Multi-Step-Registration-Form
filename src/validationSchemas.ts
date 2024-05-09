
import * as Yup from "yup";

export const userDetailSchema = Yup.object({
name: Yup.string().trim().required("Name is required"),
email: Yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Enter valid email').required('Email is required'),
password: Yup
    .string().min(8,"Must be atleast 8 characters")
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain one number, one upper case letter and one special case character"
    ),
  confirmPassword: Yup
    .string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), ""], 'Passwords must match')
}); 

