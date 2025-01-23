import { Layout, Menu } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Item } = Menu;
const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = () => {
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
        breakpoint="md"
        collapsedWidth="0"
        className="overflow-auto h-screen fixed left-0 bg-adminOne text-white"
      >
        <div className="p-4 text-center font-semibold text-lg mt-1 ">
          Admin Panel
        </div>
        <Menu
          className="bg-adminOne"
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
          <Item key="2" icon={<UserOutlined className="text-white" />}>
            <Link to="/admin/users">
              <span
                className={
                  selectedKey === "2" ? "text-black font-medium" : "text-white"
                }
              >
                Users
              </span>
            </Link>
          </Item>
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
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: 200 }}>
        {" "}
        <Header className="bg-adminOne shadow-sm">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-white">Welcome, Admin</h1>
            <div className=" text-white">Profile</div>{" "}
          </div>
        </Header>
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
