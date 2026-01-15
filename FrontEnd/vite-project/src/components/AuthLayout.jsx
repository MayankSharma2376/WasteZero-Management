const AuthLayout = ({ children, illustration, reverse = false }) => {
  return (
    <div className="min-h-screen flex bg-green-100">

      {/* Illustration Section */}
      <div
        className={`
          hidden md:flex
          w-1/2
          items-center
          justify-center
          px-12
          ${reverse ? "order-2" : "order-1"}
        `}
      >
        {illustration}
      </div>

      {/* Form Section */}
      <div
        className={`
          w-full md:w-1/2
          flex
          items-center
          justify-center
          px-4
          ${reverse ? "order-1" : "order-2"}
        `}
      >
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;
