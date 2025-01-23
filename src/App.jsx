import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/common/LoginPage";
import SignupPage from "./pages/common/SignupPage";
import Home from "./pages/user/Home";
import Menu from "./pages/user/Menu";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import UserLayout from "./components/layouts/Userlayout";

function App() {
  return (
    <Router>
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
