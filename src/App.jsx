import { Route, Routes } from "react-router";
import LoginBiasa from "./components/LoginBiasa";
import ReactHookForm from "./components/ReactHookForm";
import Navbar from "./components/Navbar";
import YupValidate from "./components/YupValidate";
import Register from "./components/Register";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginBiasa />} />
        <Route path="/hook-form" element={<ReactHookForm />} />
        <Route path="/yup-form" element={<YupValidate />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
