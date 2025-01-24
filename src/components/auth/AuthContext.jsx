import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to set the token and role in state and localStorage
  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setUser({ token, role });
    navigate("/admin");
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
    navigate("/login");
  };

  // Check if the user is authenticated
  const isAuthenticated = () => {
    return !!user?.token;
  };

  // Check if the user has the 'admin' role
  const isAdmin = () => {
    return user?.role === "admin";
  };

  // Effect to check authentication on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setUser({ token, role });
    }
  }, []);

  // Protect admin routes
  useEffect(() => {
    if (location.pathname.startsWith("/admin") && !isAdmin()) {
      navigate("/unauthorized");
    }
  }, [location, user]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
