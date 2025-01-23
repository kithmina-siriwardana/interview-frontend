import { Table, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const User = () => {
  // Sample data for the table
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
    },
    {
      key: "3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Viewer",
    },
  ];

  // Columns for the table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="text-adminTwo font-medium">{text}</span>
      ), // Use adminOne color for text
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <span className="text-adminTwo">{text}</span>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
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
    console.log("Edit user with key:", key);
    // Add your edit logic here
  };

  // Handle Delete Action
  const handleDelete = (key) => {
    console.log("Delete user with key:", key);
    // Add your delete logic here
  };

  return (
    <div>
      {" "}
      <h1 className="text-2xl font-semibold text-adminOne mb-4">
        User Management
      </h1>{" "}
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

export default User;
