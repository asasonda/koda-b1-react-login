import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <div className="max-w-2xl mx-auto text-center h-12">
        <nav className="flex gap-2 py-2 justify-center">
          <Link
            to="/"
            className="px-3 py-1 border border-gray-300 rounded-xl text-center"
          >
            Login dengan form Handler
          </Link>
          <Link
            to="/hook-form"
            className="px-3 py-1 border border-gray-300 rounded-xl"
          >
            Login ReactHookForm
          </Link>
          <Link
            to="/yup-form"
            className="px-3 py-1 border border-gray-300 rounded-xl"
          >
            Login menggunakan Yup
          </Link>
        </nav>
      </div>
    </div>
  );
}
