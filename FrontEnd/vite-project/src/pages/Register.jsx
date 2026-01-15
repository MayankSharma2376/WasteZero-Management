import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaRecycle,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import { registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ ...form, role });
      alert("Account created successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  const Illustration = () => (
    <div className="max-w-md">
      <h2 className="text-3xl font-bold mb-6">
        Start Your Journey to <span className="text-green-700">Zero Waste</span>
      </h2>

      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <FaRecycle className="text-green-700 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Smart Waste Segregation</h4>
            <p className="text-gray-600 text-sm">
              Easily classify and manage recyclable waste
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaLeaf className="text-green-700 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Eco-Friendly Rewards</h4>
            <p className="text-gray-600 text-sm">
              Earn points for sustainable actions
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaHandsHelping className="text-green-700 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">Community Impact</h4>
            <p className="text-gray-600 text-sm">
              Be part of a cleaner and greener future
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout reverse illustration={<Illustration />}>
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <Link to="/" className="text-green-700 text-sm">← Back to Home</Link>

        <h2 className="text-2xl font-bold my-4">Create Account</h2>

        {/* Role Selector */}
        <div className="flex gap-2 mb-4">
          {["user", "ngo", "admin"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 border py-2 rounded ${
                role === r ? "bg-green-700 text-white" : ""
              }`}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border p-3 pl-10 rounded"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
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
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border p-3 pl-10 rounded"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              name="location"
              placeholder="Location"
              className="w-full border p-3 pl-10 rounded"
              onChange={handleChange}
            />
          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800">
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700">Sign In</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
