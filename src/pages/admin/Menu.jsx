import { Table, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Menu = () => {
  // Sample data for the table
  const dataSource = [
    {
      key: "1",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil.",
      category: "Pizza",
      price: "$10.99",
    },
    {
      key: "2",
      name: "Spaghetti Carbonara",
      description: "Pasta with eggs, cheese, pancetta, and black pepper.",
      category: "Pasta",
      price: "$12.99",
    },
    {
      key: "3",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, parmesan, and Caesar dressing.",
      category: "Salad",
      price: "$8.99",
    },
  ];

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
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <span className="text-adminTwo">{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <span className="text-adminTwo">{text}</span>,
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
      <h1 className="text-2xl font-semibold text-adminOne mb-4">
        Menu Management
      </h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        className="rounded-lg overflow-hidden"
      />
    </div>
  );
};

export default Menu;
