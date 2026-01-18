import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import LoginIllustration from "../components/LoginIllustration";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout illustration={<LoginIllustration />}>
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <Link to="/" className="text-green-700 text-sm">
          ← Back to Home
        </Link>

        <h2 className="text-2xl font-bold my-4">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border p-3 pl-10 rounded"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full border p-3 pl-10 pr-10 rounded"
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800">
            Login
          </button>
        </form>

        <div className="text-sm text-center mt-4 space-y-2">
          <Link to="/forgot-password" className="text-green-700 block">
            Forgot Password?
          </Link>
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-700">
              Register
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
