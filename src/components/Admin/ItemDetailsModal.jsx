import { Modal, Descriptions, Image } from "antd";

const ItemDetailsModal = ({ visible, onCancel, item }) => {
  if (!item) return null;

  if (item) console.log(item);

  return (
    <Modal
      title="Item Details"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered
      width={800}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          {/* <img
            alt={item.name}
            src={item.image || "https://i.sstatic.net/y9DpT.jpg"}
            className="rounded-lg"
            width={200}
            height={200}
          /> */}
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Name">{item.name}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {item.description}
          </Descriptions.Item>
          <Descriptions.Item label="Price (LKR)">
            {item.price}
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            {item.category}
          </Descriptions.Item>
          <Descriptions.Item label="Type">{item.type}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <span className={item.isActive ? "text-green-700" : "text-red-600"}>
              {item.isActive ? "Active" : "Inactive"}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Created At">
            {new Date(item.createdAt).toLocaleString()}
          </Descriptions.Item>
          <Descriptions.Item label="Updated At">
            {new Date(item.updatedAt).toLocaleString()}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Modal>
  );
};

export default ItemDetailsModal;
