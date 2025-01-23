import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="bg-white p-10 rounded-xl w-full h-full max-w-md">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Login
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="text-black underline font-medium hover:text-gray-800"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
