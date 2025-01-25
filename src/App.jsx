import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/common/LoginPage";
import SignupPage from "./pages/common/SignupPage";
import Home from "./pages/user/Home";
import Menu from "./pages/user/Menu";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import Dashboard from "./pages/admin/Dashboard";
import UserLayout from "./components/layouts/Userlayout";
import AdminMenu from "./pages/admin/Menu";
import AdminLayout from "./components/layouts/Adminlayout";
import { AuthProvider, useAuth } from "./components/auth/AuthContext";
import UnauthorizedPage from "./pages/common/UnauthorizedPage";

export const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (requiredRole === "admin" && !isAdmin()) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* User Routes */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Common Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route
              path="/admin"
              element={
                <PrivateRoute requiredRole="admin">
                  <Dashboard />
                </PrivateRoute>
              }
            />
            {/* <Route path="/admin/users" element={<AdminUser />} /> */}
            <Route
              path="/admin/menu"
              element={
                <PrivateRoute requiredRole="admin">
                  <AdminMenu />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
