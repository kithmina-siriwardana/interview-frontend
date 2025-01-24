import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const Dashboard = () => {
  const totalUsers = 10;
  const totalMenuItems = 20;
  return (
    <div>
      {/* Dashboard Title */}
      <h1 className="text-2xl font-semibold text-adminOne mb-4">Dashboard</h1>

      {/* Cards for Total Users and Total Menu Items */}
      <Row gutter={[16, 16]}>
        {/* Total Users Card */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Text className="text-gray-600 text-lg">Total Users</Text>
            <Title level={3} className="text-adminOne mt-2">
              {totalUsers}
            </Title>
          </Card>
        </Col>

        {/* Total Menu Items Card */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Text className="text-gray-600 text-lg">Total Menu Items</Text>
            <Title level={3} className="text-adminOne mt-2">
              {totalMenuItems}
            </Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
