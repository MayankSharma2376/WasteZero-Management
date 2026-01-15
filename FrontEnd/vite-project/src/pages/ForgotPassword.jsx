import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaShieldAlt } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const Illustration = () => (
    <div className="max-w-md text-center">
      <FaLock className="text-green-700 text-6xl mx-auto mb-6" />
      <h2 className="text-3xl font-bold mb-4">Secure Account Recovery</h2>
      <p className="text-gray-600 mb-8">
        We take security seriously. Your password reset is fully protected.
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white/60 p-4 rounded shadow">
          <FaShieldAlt className="text-green-700 text-xl mb-2 mx-auto" />
          Encrypted Process
        </div>
        <div className="bg-white/60 p-4 rounded shadow">
          <FaEnvelope className="text-green-700 text-xl mb-2 mx-auto" />
          Email Verification
        </div>
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reset link feature coming soon");
  };

  return (
    <AuthLayout illustration={<Illustration />}>
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <Link to="/" className="text-green-700 text-sm">← Back to Home</Link>

        <h2 className="text-2xl font-bold my-4">Forgot Password?</h2>
        <p className="text-gray-600 mb-6">
          Enter your email to receive a password reset link
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 pl-10 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800">
            Send Reset Link
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Remembered your password?{" "}
          <Link to="/login" className="text-green-700">Sign In</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
