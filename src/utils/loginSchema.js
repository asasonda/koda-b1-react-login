import * as yup from "yup";
export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email wajib diisi")
    .email("format email tidak valid"),
  
  username: yup
    .string()
    .trim()
    .required("username wajib diisi")
    .min(3, "Username minimal 3 karakter"),
  password: yup
    .string()
    .required("Password wajib diisi")
    .min(8, "Password minimal 8 karakter"),
});