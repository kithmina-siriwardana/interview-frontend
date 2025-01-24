import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900">
        <div
          className="bg-cover bg-center h-96 flex items-center justify-center opacity-60 text-opacity-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhZmV8ZW58MHwwfDB8fHwy')",
          }}
        >
          <Title
            level={1}
            className=" text-5xl font-bold text-center"
            style={{ color: "white" }}
          >
            About Us
          </Title>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-10">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Our Restaurant"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </Col>
          <Col xs={24} md={12} className="flex flex-col justify-center">
            <Title level={2} className="text-3xl font-bold mb-6 text-center">
              Our Mission
            </Title>
            <Paragraph className="text-gray-700 text-lg text-center">
              At <span className="font-semibold">Gourmet Delights</span>, we are
              passionate about creating unforgettable dining experiences. Our
              mission is to serve delicious, high-quality food made from fresh,
              locally-sourced ingredients. We believe in the power of food to
              bring people together and strive to make every meal a celebration
              of flavor, culture, and community.
            </Paragraph>
          </Col>
        </Row>
      </div>

      {/* Vision Section */}
      <div className=" py-10">
        <div className="container mx-auto px-6">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} className="flex flex-col justify-center">
              <Title level={2} className="text-3xl font-bold mb-6 text-center">
                Our Vision
              </Title>
              <Paragraph className="text-gray-700 text-lg text-center">
                Our vision is to become the most beloved restaurant in the city,
                known for our exceptional cuisine, warm hospitality, and
                commitment to sustainability. We aim to inspire a culture of
                mindful dining, where every dish tells a story and every guest
                feels at home.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our Vision"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-8">
        <Title level={2} className="text-3xl font-bold text-center mb-8">
          Our Values
        </Title>
        <Row gutter={[32, 32]}>
          {/* Value 1 - Quality */}
          <Col xs={24} sm={12} md={8}>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Quality"
                className="w-full h-48 object-cover rounded-lg mb-4" // Fixed height and width
              />
              <Title level={4} className="text-xl font-semibold mb-4">
                Quality
              </Title>
              <Paragraph className="text-gray-600">
                We are committed to using only the finest ingredients and
                maintaining the highest standards in every dish we serve.
              </Paragraph>
            </div>
          </Col>

          {/* Value 2 - Sustainability */}
          <Col xs={24} sm={12} md={8}>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Sustainability"
                className="w-full h-48 object-cover rounded-lg mb-4" // Fixed height and width
              />
              <Title level={4} className="text-xl font-semibold mb-4">
                Sustainability
              </Title>
              <Paragraph className="text-gray-600">
                We prioritize eco-friendly practices, from sourcing local
                ingredients to minimizing waste in our kitchen.
              </Paragraph>
            </div>
          </Col>

          {/* Value 3 - Community */}
          <Col xs={24} sm={12} md={8}>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Community"
                className="w-full h-48 object-cover rounded-lg mb-4" // Fixed height and width
              />
              <Title level={4} className="text-xl font-semibold mb-4">
                Community
              </Title>
              <Paragraph className="text-gray-600">
                We believe in giving back to the community and creating a
                welcoming space for everyone to enjoy.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
