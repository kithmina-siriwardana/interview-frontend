import { Card, Row, Col, Typography, Spin } from "antd";
import axios from "axios";
import { useState } from "react";

const { Title, Text } = Typography;

const Dashboard = () => {
  const [totalMenuItems, setTotalMenuItems] = useState(0);
  const [loading, setLoading] = useState(true);

  useState(() => {
    // Fetch total menu items
    const fetchTotalMenuItems = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/menu/get/count`
        );

        console.log(response.data);
        setTotalMenuItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchTotalMenuItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <div>
      {/* Dashboard Title */}
      <h1 className="text-2xl font-semibold text-adminOne mb-4">Dashboard</h1>

      {/* Cards for Total Users and Total Menu Items */}
      <Row gutter={[16, 16]}>
        {/* Total Users Card */}
        {/* <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Text className="text-gray-600 text-lg">Total Users</Text>
            <Title level={3} className="text-adminOne mt-2">
              {totalUsers}
            </Title>
          </Card>
        </Col> */}

        {/* Total Menu Items Card */}
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
            <Text className="text-gray-600 text-lg">Total Menu Items</Text>
            <Title
              level={3}
              className="text-adminOne flex items-center justify-center"
            >
              {totalMenuItems}
            </Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
