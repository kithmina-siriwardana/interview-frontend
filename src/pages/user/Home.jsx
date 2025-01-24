import { useState, useEffect } from "react";
import { Carousel, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { sliderImages } from "../../constants/constants";
import axios from "axios";

const { Title, Paragraph } = Typography;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Fetch latest menu items
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/menu/get/latest`
        );
        setMenuItems(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle manual slide change
  const handleSlideChange = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prev) =>
        prev === 0 ? sliderImages.length - 1 : prev - 1
      );
    } else {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }
  };

  return (
    <div className=" bg-gray-100">
      {/* Hero Section with Image Slider */}
      <div className="relative h-[600px] overflow-hidden">
        <Carousel
          autoplay
          dots={false}
          effect="fade"
          afterChange={(index) => setCurrentSlide(index)}
          selectedIndex={currentSlide}
        >
          {sliderImages.map((image, index) => (
            <div key={index} className="h-[600px]">
              <img
                src={image}
                alt={`Cafe Ambience ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
          <Title
            level={1}
            className="text-6xl font-bold mb-4"
            style={{ color: "white" }}
          >
            Welcome to Our Cafe
          </Title>
          <Paragraph className="text-xl mb-8 text-white">
            Experience the finest coffee and delicious treats in a cozy
            atmosphere.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            className="bg-primary text-secondary"
          >
            Explore Our Menu
          </Button>
        </div>

        {/* Manual Navigation Buttons */}
        <Button
          icon={<LeftOutlined />}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-4 flex items-center justify-center"
          onClick={() => handleSlideChange("prev")}
        />
        <Button
          icon={<RightOutlined />}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-4 flex items-center justify-center"
          onClick={() => handleSlideChange("next")}
        />
      </div>

      {/* About Section */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Title level={2} className="text-4xl font-bold mb-4">
            About Us
          </Title>
          <Paragraph className="text-lg text-gray-600">
            Our cafe is a place where you can relax, enjoy a cup of freshly
            brewed coffee, and indulge in delicious pastries. We source the
            finest ingredients to create a memorable experience for our
            customers.
          </Paragraph>
        </div>
      </div>

      {/* Menu Highlights Section */}
      {loading ? (
        <>Loading...</>
      ) : menuItems ? (
        <>
          <div className="py-8 px-8 bg-gray-100">
            <div className="max-w-6xl mx-auto">
              <Title level={2} className="text-4xl font-bold text-center">
                Latest Menu Highlights
              </Title>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                {menuItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />

                    {/* Name */}
                    <Title level={4} className="text-xl font-semibold mt-4">
                      {item.name}
                    </Title>

                    {/* Description */}
                    <Paragraph className="text-gray-600">
                      {item.description}
                    </Paragraph>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
