import { Card, Tag, Typography } from "antd";

const { Title, Text } = Typography;

const MenuItemCard = ({ item }) => {
  const { name, description, price, image, type } = item;

  return (
    <Card
      hoverable
      className="w-72 rounded-lg border bg-slate-100 text-secondary"
      style={{ height: "400px" }} // Fixed height for consistency
      cover={
        <img
          alt={name}
          src={image || "https://i.sstatic.net/y9DpT.jpg"}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      }
    >
      {/* Name - Limited to 2 lines */}
      <Title
        level={4}
        className="text-secondary font-semibold mb-2 line-clamp-2" // Tailwind line-clamp utility
      >
        {name}
      </Title>

      {/* Description - Limited to 3 lines */}
      <Text className="text-gray-400 text-sm block mb-4 line-clamp-3">
        {" "}
        {/* Tailwind line-clamp utility */}
        {description}
      </Text>

      {/* Price and Type */}
      <div className="flex justify-between items-center">
        <Text strong className="text-secondary text-lg">
          ${price}
        </Text>
        <Tag
          color={type === "Veg" || type === "Vegan" ? "green" : "red"}
          className="rounded-full font-medium"
        >
          {type}
        </Tag>
      </div>
    </Card>
  );
};

export default MenuItemCard;
