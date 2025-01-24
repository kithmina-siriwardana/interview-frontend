import { useState, useEffect } from "react";
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

const MenuItemModal = ({
  isModalVisible,
  handleModalCancel,
  setItemAdded,
  itemAdded,
  mode, // "add" or "edit"
  selectedItem, // Item data for "edit" mode
}) => {
  const token = localStorage.getItem("token");
  const [form] = Form.useForm();
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form fields when in "edit" mode
  useEffect(() => {
    if (mode === "edit" && selectedItem) {
      form.setFieldsValue({
        name: selectedItem.name,
        description: selectedItem.description,
        price: selectedItem.price,
        category: selectedItem.category,
        type: selectedItem.type,
        status: selectedItem.isActive.toString(),
      });
      setSelectedImageFile(
        selectedItem.image ? { url: selectedItem.image } : null
      );
    } else {
      form.resetFields();
      setSelectedImageFile(null);
    }
  }, [mode, selectedItem, form]);

  const handleSubmit = async (values) => {
    if (!selectedImageFile && mode === "add") {
      message.error("Please upload an image!");
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = selectedItem?.image; // Use existing image URL in "edit" mode

      // Upload new image to Cloudinary in "add" mode or if a new image is uploaded in "edit" mode
      if (selectedImageFile && selectedImageFile instanceof File) {
        const cloudinaryFormData = new FormData();
        cloudinaryFormData.append("file", selectedImageFile);
        cloudinaryFormData.append("upload_preset", "menu_item_upload");
        cloudinaryFormData.append("folder", "menu_items");

        const cloudinaryResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dku5y0o8s/image/upload",
          cloudinaryFormData
        );
        imageUrl = cloudinaryResponse.data.secure_url;
      }

      // Prepare payload with image URL
      const payload = {
        ...values,
        isActive: values.status === "true",
        image: imageUrl,
      };

      // Send data to backend
      if (mode === "add") {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/menu`,
          payload,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        message.success("Menu item added successfully!");
      } else if (mode === "edit" && selectedItem) {
        await axios.patch(
          `${import.meta.env.VITE_BACKEND_URL}/api/menu/${selectedItem._id}`,
          payload,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        message.success("Menu item updated successfully!");
      }

      setItemAdded(!itemAdded);
    } catch (error) {
      console.error("Error:", error);
      message.error(
        mode === "add"
          ? "Failed to add menu item. Please try again."
          : "Failed to update menu item. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      handleModalCancel();
      form.resetFields();
      setSelectedImageFile(null);
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
        return Upload.LIST_IGNORE;
      }
      setSelectedImageFile(file);
      return false;
    },
    onRemove: () => {
      setSelectedImageFile(null);
    },
    maxCount: 1,
    fileList: selectedImageFile
      ? [
          {
            uid: "-1",
            name: selectedImageFile.name || "image",
            status: "done",
            url: selectedImageFile.url,
          },
        ]
      : [],
  };

  return (
    <Modal
      title={mode === "add" ? "Add New Menu Item" : "Edit Menu Item"}
      visible={isModalVisible}
      onCancel={() => {
        handleModalCancel();
        form.resetFields();
        setSelectedImageFile(null);
      }}
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
        <Form.Item label="Image">
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
            <Option value="All">All Categories</Option>
            <Option value="Sandwiches">Sandwiches</Option>
            <Option value="Soups and Salads">Soups and Salads</Option>
            <Option value="Breakfast Items">Breakfast Items</Option>
            <Option value="Pastries and Desserts">Pastries and Desserts</Option>
            <Option value="Coffee and Tea">Coffee and Tea</Option>
            <Option value="Specialty Dishes">Specialty Dishes</Option>
            <Option value="Classic Entrees">Classic Entrees</Option>
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
            <Option value="Vegan">Vegan</Option>
            <Option value="Non-Veg">Non-Veg</Option>
          </Select>
        </Form.Item>

        {/* Status */}
        {mode === "edit" && (
          <Form.Item
            name="status"
            label="Status"
            rules={[
              { required: true, message: "Please select the item status!" },
            ]}
          >
            <Select placeholder="Select type">
              <Option value="true">Active</Option>
              <Option value="false">Inactive</Option>
            </Select>
          </Form.Item>
        )}

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="rounded-md bg-adminTwo text-white"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {mode === "add" ? "Add Item" : "Update Item"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MenuItemModal;
