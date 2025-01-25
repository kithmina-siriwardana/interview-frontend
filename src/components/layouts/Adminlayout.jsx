import { useState } from "react";
import { Button, Layout, Menu, Modal } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthContext";

const { Item } = Menu;
const { Sider, Content, Footer } = Layout;

const AdminLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const selectedKey = location.pathname.startsWith("/admin/users")
    ? "2"
    : location.pathname.startsWith("/admin/menu")
    ? "3"
    : "1";

  // Handle logout confirmation
  const handleLogoutConfirm = () => {
    logout();
    setIsLogoutModalVisible(false);
  };

  // Handle logout cancellation
  const handleLogoutCancel = () => {
    setIsLogoutModalVisible(false);
  };

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        collapsedWidth="0"
        className="overflow-auto h-screen fixed left-0 bg-adminOne text-white"
      >
        <div className="p-4 text-center font-semibold text-2xl mt-1">
          Admin Panel
        </div>
        <Menu
          className="bg-adminOne mt-5"
          mode="inline"
          selectedKeys={[selectedKey]}
        >
          <Item
            key="1"
            icon={
              <DashboardOutlined
                className={
                  selectedKey === "1" ? "icon-admin-selected" : "icon-admin"
                }
              />
            }
          >
            <Link to="/admin">
              <span
                className={
                  selectedKey === "1" ? "text-black font-medium" : "text-white"
                }
              >
                Dashboard
              </span>
            </Link>
          </Item>
          <Item
            key="3"
            icon={
              <SettingOutlined
                className={
                  selectedKey === "3" ? "icon-admin-selected" : "icon-admin"
                }
              />
            }
          >
            <Link to="/admin/menu">
              <span
                className={
                  selectedKey === "3" ? "text-black font-medium" : "text-white"
                }
              >
                Menu
              </span>
            </Link>
          </Item>
        </Menu>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-center mb-20">
          <Button
            onClick={() => setIsLogoutModalVisible(true)}
            className="flex items-center justify-center space-x-2 py-2 px-6 admin-logout-button font-semibold rounded-lg"
          >
            <LogoutOutlined />
            <span>Logout</span>
          </Button>
        </div>
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: 200 }}>
        <Content className="p-6 bg-primary text-black">
          <div className="p-6 bg-adminFour rounded-lg shadow-sm">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </Content>
        <Footer className="text-center bg-adminOne text-white">
          Crave Cafe © {new Date().getFullYear()} Alright Reserved
        </Footer>
      </Layout>

      {/* Logout Confirmation Modal */}
      <Modal
        title="Confirm Logout"
        visible={isLogoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        okText="Logout"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </Layout>
  );
};

export default AdminLayout;
