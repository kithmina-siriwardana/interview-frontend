import { Button, Layout, Menu } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  LogoutOutlined,
  // UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthContext";

const { Item } = Menu;
const { Sider, Content, Footer } = Layout;

const AdminLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const selectedKey = location.pathname.startsWith("/admin/users")
    ? "2"
    : location.pathname.startsWith("/admin/menu")
    ? "3"
    : "1";

  return (
    <Layout className="min-h-screen ">
      {/* Sidebar */}
      <Sider
        // breakpoint="md"
        collapsedWidth="0"
        className="overflow-auto h-screen fixed left-0 bg-adminOne text-white"
      >
        <div className="p-4 text-center font-semibold text-2xl mt-1 ">
          Admin Panel
        </div>
        <Menu
          className="bg-adminOne mt-5"
          mode="inline"
          selectedKeys={[selectedKey]}
        >
          <Item key="1" icon={<DashboardOutlined className="text-white" />}>
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
          {/* <Item key="2" icon={<UserOutlined className="text-white" />}>
            <Link to="/admin/users">
              <span
                className={
                  selectedKey === "2" ? "text-black font-medium" : "text-white"
                }
              >
                Users
              </span>
            </Link>
          </Item> */}
          <Item key="3" icon={<SettingOutlined className="text-white" />}>
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
            onClick={logout}
            className="flex items-center justify-center space-x-2 py-2 px-6 bg-adminThree border-adminThree text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            <LogoutOutlined />
            <span>Logout</span>
          </Button>
        </div>
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: 200 }}>
        {" "}
        {/* <Header className="bg-adminOne shadow-sm">
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={4} className="text-white">
                Welcome, Admin
              </Title>
            </Col>
            <Col>
              <Button type="primary" className="bg-adminThree text-white">
                Logout
              </Button>
            </Col>
          </Row>
        </Header> */}
        <Content className="p-6 bg-primary text-black">
          <div className="p-6 bg-adminFour rounded-lg shadow-sm">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </Content>
        <Footer className="text-center bg-adminOne text-white">
          Crave Cafe © {new Date().getFullYear()} Alright Reserved
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
