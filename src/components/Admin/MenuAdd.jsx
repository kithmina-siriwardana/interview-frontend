import { useState } from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const AddMenuItemModal = ({ isModalVisible, handleModalCancel }) => {
  const token = localStorage.getItem("token");
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log("Form values:", values);
    console.log("Image URL:", imageUrl);

    const payload = {
      name: values.name,
      description: values.description,
      price: values.price,
      image: imageUrl,
      category: values.category,
      type: values.type,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/menu`,
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Backend response:", response.data);
      message.success("Menu item added successfully!");
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      message.error("Failed to add menu item!");
    } finally {
      handleModalCancel();
      form.resetFields();
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
        return Upload.LIST_IGNORE;
      }

      // Upload the image to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "menu_item_upload");
      formData.append("folder", "menu_items");

      fetch(`https://api.cloudinary.com/v1_1/dku5y0o8s/image/upload`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Cloudinary upload response:", data);
          if (data.error) {
            message.error(data.error.message);
          } else {
            setImageUrl(data.secure_url);
            message.success("Image uploaded successfully!");
          }
        })
        .catch((error) => {
          console.error("Error uploading image to Cloudinary:", error);
          message.error("Failed to upload image!");
        });

      return false;
    },
    maxCount: 1,
  };

  // Upload props for image upload
  //   const uploadProps = {
  //     beforeUpload: (file) => {
  //       const isImage = file.type.startsWith("image/");
  //       if (!isImage) {
  //         message.error("You can only upload image files!");
  //         return Upload.LIST_IGNORE;
  //       }

  //       // Upload the image to Cloudinary
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       formData.append("upload_preset", "menu_item_upload"); // Replace with your Cloudinary upload preset
  //       formData.append("folder", "menu_items"); // Specify the folder name
  //       formData.append("api_key", apiKey); // Add API key
  //       formData.append("timestamp", (Date.now() / 1000) | 0); // Add timestamp
  //       formData.append("cloud_name", cloudName); // Add cloud name

  //       // Generate signature (optional but recommended for security)
  //       const signature = `cloud_name=${cloudName}&timestamp=${formData.get(
  //         "timestamp"
  //       )}&upload_preset=${formData.get("upload_preset")}${apiSecret}`;
  //       formData.append("signature", signature);

  //       fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
  //         method: "POST",
  //         body: formData,
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log("Cloudinary upload response:", data);
  //           setImageUrl(data.secure_url); // Save the Cloudinary image URL
  //           if (!data.error) {
  //             message.success("Image uploaded successfully!");
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error uploading image to Cloudinary:", error);
  //           message.error("Failed to upload image!");
  //         });

  //       return false; // Prevent Ant Design from automatically uploading the file
  //     },
  //     maxCount: 1,
  //   };

  return (
    <Modal
      title="Add New Menu Item"
      visible={isModalVisible}
      onCancel={handleModalCancel}
      footer={null}
      width={600}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Name */}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the item name!" }]}
        >
          <Input placeholder="Enter item name" />
        </Form.Item>

        {/* Description */}
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter the item description!" },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Enter item description" />
        </Form.Item>

        {/* Price */}
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter the item price!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: "100%" }}
            placeholder="Enter item price"
          />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item
          name="image"
          label="Image"
          rules={[
            { required: true, message: "Please upload an image for the item!" },
          ]}
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        {/* Category */}
        <Form.Item
          name="category"
          label="Category"
          rules={[
            { required: true, message: "Please select the item category!" },
          ]}
        >
          <Select placeholder="Select category">
            <Option value="Fast Food">Fast Food</Option>
            <Option value="Pizza">Pizza</Option>
            <Option value="Pasta">Pasta</Option>
            <Option value="Salad">Salad</Option>
          </Select>
        </Form.Item>

        {/* Type */}
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: "Please select the item type!" }]}
        >
          <Select placeholder="Select type">
            <Option value="Veg">Veg</Option>
            <Option value="Non-Veg">Non-Veg</Option>
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="rounded-md bg-adminTwo text-white"
          >
            Add Item
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddMenuItemModal;
