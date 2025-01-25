import { Card, Tag, Typography } from "antd";

const { Title, Text } = Typography;

const MenuItemCard = ({ item }) => {
  const { name, description, price, image, type } = item;

  return (
    <Card
      hoverable
      className="w-72 rounded-lg bg-slate-100 text-secondary"
      style={{ height: "400px" }}
      bodyStyle={{ padding: 0 }}
      cover={
        <img
          alt={name}
          src={image || "https://i.sstatic.net/y9DpT.jpg"}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      }
    >
      {/* Name and Description - This section will grow to fill available space */}
      <div className="flex flex-col justify-between h-[calc(400px-12rem)] p-4 border ">
        <div className="flex-grow">
          <Title
            level={4}
            className="text-secondary font-semibold mb-2 line-clamp-2"
          >
            {name.length > 50 ? `${name.substring(0, 50)}...` : name}
          </Title>

          <Text className="text-gray-400 text-sm block mb-4 line-clamp-3">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </Text>
        </div>

        {/* Price and Type - This section will always stay at the bottom */}
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
      </div>
    </Card>
  );
};

export default MenuItemCard;
