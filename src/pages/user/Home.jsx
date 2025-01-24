import { useState, useEffect } from "react";
import { Carousel, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

// Sample images for the slider
const sliderImages = [
  "https://images.unsplash.com/photo-1557275357-072087771588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2RzfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1520347788611-1654e613e422?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2RzfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1617460182733-e555b2ce5ede?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2RzfGVufDB8fDB8fHwy",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
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
    <div className="min-h-screen bg-gray-100">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center">
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
      <div className="py-8 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Title level={2} className="text-4xl font-bold text-center">
            Menu Highlights
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Menu Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/300x200?text=Coffee"
                alt="Coffee"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Title level={4} className="text-xl font-semibold mt-4">
                Specialty Coffee
              </Title>
              <Paragraph className="text-gray-600">
                Handcrafted coffee made from the finest beans.
              </Paragraph>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/300x200?text=Pastries"
                alt="Pastries"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Title level={4} className="text-xl font-semibold mt-4">
                Fresh Pastries
              </Title>
              <Paragraph className="text-gray-600">
                Delicious pastries baked fresh daily.
              </Paragraph>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/300x200?text=Sandwiches"
                alt="Sandwiches"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Title level={4} className="text-xl font-semibold mt-4">
                Gourmet Sandwiches
              </Title>
              <Paragraph className="text-gray-600">
                Sandwiches made with premium ingredients.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
