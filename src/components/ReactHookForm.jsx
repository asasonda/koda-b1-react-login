import { useForm } from "react-hook-form";
// import { data } from "react-router";

export default function ReactHookForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onValid(data) {
    console.log(`validd`);
    console.log(`Email valid: ${data.email}`);
    console.log(`Password: ${data.password}`);
    reset();
  }

  function onInvalid(data) {
    console.log(`Tidak Valid`);
    console.log(`Email Invalid: ${data.email}`);
    console.log(`Password: ${data.password}`);
    reset();
  }

  return (
    <div>
      <div className="max-w-lg mx-auto border border-gray-300 mt-10 rounded-2xl">
        <div className="px-12 py-6">
          <h2 className="font-bold text-center text-3xl">React Hook Form</h2>
          <p className="text-sm text-gray-400 text-center mb-4">
            masuk dengan input username dan input password
          </p>
          <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email wajib diisi"
                })}
                placeholder="masukkan username"
                required
                className="form-input"
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password wajib diisi",
                })}
                placeholder="masukkan password"
                className="form-input"
              />
            </div>
            <button
              type="submit"
              className="button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
