import { Modal, Typography, Image, Divider, Tag } from "antd";
import {
  TagOutlined,
  AppstoreOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const MenuItemModal = ({ item, visible, onClose }) => {
  if (!item) return null;

  return (
    <Modal
      title={null}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      bodyStyle={{ padding: "0" }}
      className="rounded-lg overflow-hidden"
    >
      <Image
        src={item.image}
        alt={item.name}
        className="w-full rounded-t-lg shadow-md"
        preview={false}
      />

      <div className="p-6">
        {" "}
        {/* Name */}
        <Title level={3} className="text-center mb-4 text-2xl font-semibold">
          {item.name}
        </Title>
        {/* Description */}
        <Paragraph className="text-center text-gray-600 mb-6 text-base">
          {item.description}
        </Paragraph>
        <Divider className="my-4" />
        {/* Price */}
        <div className="flex justify-center mb-6">
          {" "}
          <Tag
            icon={<DollarOutlined />}
            color="gold"
            className="flex items-center text-base px-4 py-2 w-full max-w-[200px] justify-center"
          >
            <Text strong>Price:</Text> ${item.price.toFixed(2)}
          </Tag>
        </div>
        {/* Type and Category */}
        <div className="flex justify-center space-x-4 ">
          {" "}
          <Tag
            icon={<AppstoreOutlined />}
            color="green"
            className="flex items-center text-sm px-3 py-1"
          >
            <Text strong>Category:</Text> {item.category}
          </Tag>
          <Tag
            icon={<TagOutlined />}
            color="blue"
            className="flex items-center text-sm px-3 py-1"
          >
            <Text strong>Type:</Text> {item.type}
          </Tag>
        </div>
      </div>
    </Modal>
  );
};

export default MenuItemModal;
