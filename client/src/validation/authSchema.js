import * as yup from "yup";

//login form schema using yup
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim("Whitespace is not allowed")
    .email("Insert a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password length is minimum 6")
    .matches(/^[^\s]+$/, 'No spaces are allowed')
    .required("Password is required"),
});

//signUp form schema using yup
export const signUpSchema = yup.object().shape({
  firstName: yup.string().matches(/^[^\s]+$/, 'No spaces are allowed').required("First Name is required"),
  lastName: yup.string().matches(/^[^\s]+$/, 'No spaces are allowed').required("Last Name is required"),
  email: yup
    .string()
    .trim("Whitespace is not allowed")
    .email("Insert a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password length is minimum 6")
    .required("Password is required"),
});
