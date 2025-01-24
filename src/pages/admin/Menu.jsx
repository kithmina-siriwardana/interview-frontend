import { Table, Space, message, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import AddMenuItemModal from "../../components/Admin/MenuAdd";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fetch menu items
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/menu`
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

  // Show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Hide modal
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  // Transform menuItems into Data source for the table
  const dataSource = menuItems.map((item, index) => ({
    key: (index + 1).toString(),
    name: item.name,
    description: item.description,
    price: `${item.price.toFixed(2)}`,
    category: item.category,
    type: item.type,
    Status: item.isActive,
  }));

  // Function to truncate description
  const truncateDescription = (text, maxLength = 50) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  // Columns for the table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="text-adminTwo font-medium">{text}</span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <span className="text-adminTwo">{truncateDescription(text)}</span>
      ),
    },
    {
      title: "Price (Rs)",
      dataIndex: "price",
      key: "price",
      render: (text) => <span className="text-adminTwo">{text}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <span className="text-adminTwo">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-adminTwo">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (text) => (
        <span className={text ? "text-green-700" : "text-red-600"}>
          {text ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => handleEdit(record.key)}
          />
          <DeleteOutlined
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  // Handle Edit Action
  const handleEdit = (key) => {
    console.log("Edit menu item with key:", key);
    // Add your edit logic here
  };

  // Handle Delete Action
  const handleDelete = (key) => {
    console.log("Delete menu item with key:", key);
    // Add your delete logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-adminOne mb-4">
          Menu Management
        </h1>
        <Button
          className="rounded-md py-5 bg-adminTwo text-white"
          onClick={showModal}
          // style={{ hover: { backgroundColor: "var(--adminOne)" } }}
        >
          Add new Item
        </Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        className="rounded-lg overflow-hidden"
      />

      {/* Add new item modal */}
      <AddMenuItemModal
        isModalVisible={isModalVisible}
        handleModalCancel={handleModalCancel}
      />
    </div>
  );
};

export default Menu;
