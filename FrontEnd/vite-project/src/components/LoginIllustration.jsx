import { FaUsers, FaTruck, FaRecycle } from "react-icons/fa";

const LoginIllustration = () => {
  return (
    <div className="text-center max-w-md">
      <h2 className="text-3xl font-bold mb-4">
        Smart Waste Management at <br /> Your Fingertips
      </h2>

      <p className="text-gray-700 mb-10">
        Join thousands of users making a difference in waste management
        and environmental sustainability.
      </p>

      <div className="flex justify-between text-center">
        <div>
          <FaUsers className="mx-auto text-green-700 text-3xl mb-2" />
          <p className="font-bold">10K+</p>
          <p className="text-sm">Active Users</p>
        </div>

        <div>
          <FaTruck className="mx-auto text-green-700 text-3xl mb-2" />
          <p className="font-bold">500+</p>
          <p className="text-sm">Agents</p>
        </div>

        <div>
          <FaRecycle className="mx-auto text-green-700 text-3xl mb-2" />
          <p className="font-bold">50K+</p>
          <p className="text-sm">Pickups</p>
        </div>
      </div>
    </div>
  );
};

export default LoginIllustration;
