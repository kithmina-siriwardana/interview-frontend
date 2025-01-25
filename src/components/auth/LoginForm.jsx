import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { useAuth } from "./AuthContext";

const LoginForm = () => {
  const { login } = useAuth();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);

      // Send login request to the backend
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        values
      );

      // Handle successful login
      const { token } = response.data;
      const { role } = response.data;
      console.log("Login successful. Token:", token);

      if (token) {
        message.success("Login successful!");
        login(token, role);
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      message.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl w-full max-w-md">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Login
      </h2>
      <Form onFinish={onFinish} layout="vertical">
        {/* Email Field */}
        <Form.Item
          label="Email"
          name="email"
          required={false}
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          required={false}
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </Form.Item>

        {/* Login Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-full py-5 px-4 rounded-lg font-semibold "
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* Signup Link */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="text-secondary underline font-medium hover:text-gray-800"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
