import { useEffect, useState } from "react";
import { Input, Select, Row, Col, Typography, message } from "antd";
import MenuItemCard from "../../components/user/MenuItemCard";
import axios from "axios";

const { Search } = Input;
const { Option } = Select;
const { Title, Paragraph } = Typography;

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  // Fetch menu items
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/menu/active`
        );
        setMenuItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading menu items...</div>;
  }

  // Display error state
  if (error) {
    message.error("Something went wrong!");
  }

  // Filter menu items based on search, category, and type
  const filteredMenuItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesType = selectedType === "All" || item.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="p-6 min-h-screen">
      {/* Title and Description */}
      <Title level={2} className="text-center">
        Our Menu
      </Title>
      <Paragraph className="text-gray-400 text-center mb-8">
        Explore our delicious menu items, carefully crafted to satisfy your
        cravings. Filter by category or type, or search for your favorite dish.
      </Paragraph>

      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row gap-9 lg:gap-16 xl:gap-24 mb-8">
        <Search
          placeholder="Search menu items..."
          allowClear
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-1/3"
        />
        <Select
          placeholder="Select Category"
          defaultValue="All"
          onChange={(value) => setSelectedCategory(value)}
          className="w-full md:w-1/4"
        >
          <Option value="All">All Categories</Option>
          <Option value="Sandwiches">Sandwiches</Option>
          <Option value="Soups and Salads">Soups and Salads</Option>
          <Option value="Breakfast Items">Breakfast Items</Option>
          <Option value="Pastries and Desserts">Pastries and Desserts</Option>
          <Option value="Coffee and Tea">Coffee and Tea</Option>
          <Option value="Specialty Dishes">Specialty Dishes</Option>
          <Option value="Classic Entrees">Classic Entrees</Option>
        </Select>
        <Select
          placeholder="Select Type"
          defaultValue="All"
          onChange={(value) => setSelectedType(value)}
          className="w-full md:w-1/4"
        >
          <Option value="All">All Types</Option>
          <Option value="Veg">Veg</Option>
          <Option value="Vegan">Vegan</Option>
          <Option value="Non-Veg">Non-Veg</Option>
        </Select>
      </div>

      {/* Menu Items Grid */}
      <Row gutter={[16, 16]}>
        {filteredMenuItems.map((item) => (
          <Col
            key={item.id}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={6}
            className="mb-2"
          >
            <MenuItemCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
