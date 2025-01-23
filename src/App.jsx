import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

function App() {
  return (
    <Layout className="min-h-screen bg-slate-200">
      <Header className="flex items-center">
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          className="flex-1 min-w-0"
        />
      </Header>

      <Content>
        <Button type="primary" className="bg-red-500">
          Primary Button
        </Button>
      </Content>

      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
