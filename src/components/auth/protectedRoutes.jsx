import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  // Get the token from localStorage
  const token = localStorage.getItem("token");

  // Decode the token to get the user's role
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded token:", decoded);

    // Access the user's role
    const { role } = decoded;
    console.log("User role:", role);

    // Check if the user is authenticated and has the required role
    if (!token || role !== requiredRole) {
      // Redirect to login if not authenticated or doesn't have the required role
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error("Failed to decode token:", error);
  }

  // Allow access to the route if the user is authenticated and has the required role
  return children;
};

export default ProtectedRoute;
