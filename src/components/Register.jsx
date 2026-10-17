import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/LoginSchema";

export default function Register() {
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
      username: "",
      password: "",
    },
  });
  function onValid(data) {
    const isValidEmail = data.email
    const isValidUserName = data.username
    const isValidPassword = data.password

    if (isValidEmail && isValidUserName && isValidPassword) {
      setNotice({
        type: "success",
        text: "Register berhasil",
      });
      reset();
    } else {
      setNotice({
        type: "error",
        text: "Email, username, dan password is required",
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
          <p className="text-sm text-gray-400 text-center mb-4"></p>
          <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="masukkan email"
                className="border border-gray-300 px-2 py-1 rounded-lg"
              />
              {errors.email?.message && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                type="text"
                {...register("username")}
                placeholder="masukkan username"
                className="border border-gray-300 px-2 py-1 rounded-lg"
              />
              {errors.username?.message && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="masukkan password"
                className="border border-gray-300 px-2 py-1 rounded-lg"
              />
              {errors.password?.message && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="py-2 w-full bg-green-600 text-white rounded-lg mt-3"
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
