import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/LoginSchema";
import { Link } from "react-router";

export default function YupValidate() {
  const [notice, setNotice] = useState({
    type: "",
    text: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onValid(data) {
    const isValid =
      data.email === "admin@example.com" && data.password === "12345678";

    if (isValid) {
      setNotice({
        type: "success",
        text: "Login berhasil",
      });
      reset();
    } else {
      setNotice({
        type: "error",
        text: "Email atau password tidak sesuai",
      });
    }
  }

  function onInvalid(data) {
    console.log(`Error Email valid : ${data.email}`);
    console.log(`Error Password : ${data.password}`);
  }
  return (
    <div>
      <div className="max-w-lg mx-auto border border-gray-300 mt-10 rounded-2xl">
        <div className="px-12 py-6">
          <h2 className="font-bold text-center text-3xl">Yup Form</h2>
          <p className="text-sm text-gray-400 text-center mb-4">
            masuk dengan input username dan input password
          </p>
          <p className="text-sm text-gray-400 text-center mb-4">belum memiliki akun? <Link to='/register' className="text-green-600">Register</Link></p>
          <p className="text-sm text-gray-400 text-center mb-4"></p>
          <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="masukkan email"
                className="form-input"
              />
              {errors.email?.message && (
                <p role="alert" className="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="masukkan password"
                className="form-input"
              />
              {errors.password?.message && (
                <p role="alert" className="alert">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="button"
            >
              Login
            </button>
          </form>
          {notice.text && (
            <p
              role="status"
              className={`mt-4 rounded-lg p-3 text-sm ${notice.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {notice.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
