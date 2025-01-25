import { Button, Modal } from "antd";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react"; // Import useState for managing modal state

export default function HeaderMenu() {
  const { logout, user } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  // Function to show the modal
  const showLogoutModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle logout confirmation
  const handleLogoutConfirm = () => {
    logout(); // Call the logout function from your AuthContext
    setIsModalVisible(false); // Close the modal
  };

  // Function to handle modal cancellation
  const handleLogoutCancel = () => {
    setIsModalVisible(false); // Close the modal
  };

  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <h1
          className="text-2xl font-bold md:mr-10 lg:mr-20 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Crave Cafe
        </h1>
        <nav>
          <ul className="flex md:space-x-4 lg:space-x-6">
            <li>
              <a
                href="/"
                className="hover:bg-btnPrimaryHover hover:text-white px-3 py-2 rounded-2xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="hover:bg-btnPrimaryHover hover:text-white px-3 py-2 rounded-2xl"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:bg-btnPrimaryHover hover:text-white px-3 py-2 rounded-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:bg-btnPrimaryHover hover:text-white px-3 py-2 rounded-2xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <Button
              className="logout-button px-4 py-2 rounded-2xl ml-4"
              onClick={showLogoutModal} // Show the modal on button click
            >
              Logout
            </Button>
            {/* Logout Confirmation Modal */}
            <Modal
              title="Confirm Logout"
              visible={isModalVisible} // Control modal visibility
              onOk={handleLogoutConfirm} // Handle logout confirmation
              onCancel={handleLogoutCancel} // Handle modal cancellation
              okText="Logout"
              cancelText="Cancel"
              okButtonProps={{ danger: true }}
            >
              <p>Are you sure you want to logout?</p>
            </Modal>
          </>
        ) : (
          <>
            <Button
              className="login-button px-4 py-2 rounded-2xl"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>
            <Button
              onClick={() => (window.location.href = "/signup")}
              className="logout-button px-4 py-2 rounded-2xl ml-4"
            >
              Sign up
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
