import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;
import HeaderMenu from "../common/Header";

const UserLayout = () => {
  return (
    <Layout className="min-h-screen bg-primary text-secondary">
      <Header className="bg-secondary text-primary">
        <HeaderMenu />
      </Header>
      <Content className="container mx-auto py-6 md:px-6 lg:px-6 xl:px-0">
        <Outlet />
      </Content>
      <Footer className="text-center bg-secondary text-primary">
        Crave Cafe ©{new Date().getFullYear()} Alright Reserved
      </Footer>
    </Layout>
  );
};

export default UserLayout;
