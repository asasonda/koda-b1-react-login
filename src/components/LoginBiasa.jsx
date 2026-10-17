import { useRef, useState } from "react";

/** username -> controlled form handling
 *  password -> uncontrolled form handling
 *
 * @returns alert form handlerSubmits
 */

export default function LoginBiasa() {
  const [username, setUserName] = useState("");
  const pass = useRef(null);

  function handleSubmit(even) {
    even.preventDefault();
    const password = pass.current.value;
    if (
      username.toLowerCase() === "admin" &&
      password.toLowerCase() === "admin123"
    ) {
      alert("Login berhasil");
    } else {
      alert("login gagal");
    }
  }
  return (
    <div>
      <div className="max-w-lg mx-auto border border-gray-300 mt-10 rounded-2xl">
        <div className="px-12 py-6">
          <h2 className="font-bold text-center text-3xl">Login</h2>
          <p className="text-sm text-gray-400 text-center mb-4">
            masuk dengan input username dan input password
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="masukkan username"
                className="border border-gray-300 px-2 py-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                type="password"
                ref={pass}
                placeholder="masukkan password"
                className="border border-gray-300 px-2 py-1 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="py-2 w-full bg-green-600 text-white rounded-lg mt-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
