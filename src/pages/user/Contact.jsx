import { Typography, Row, Col, Form, Input, Button } from "antd";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Add your form submission logic here
  };

  return (
    <div className="bg-gray-50">
      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-6 py-8">
        <Row gutter={[32, 32]}>
          {/* Contact Form */}
          <Col xs={24} md={12}>
            <Title level={3} className="text-3xl font-bold mb-6">
              Get in Touch
            </Title>
            <Form onFinish={onFinish} layout="vertical">
              {/* Name */}
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              {/* Email */}
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              {/* Message */}
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea rows={6} placeholder="Enter your message" />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-secondary text-white rounded-md"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>

          {/* Contact Info and Map */}
          <Col xs={24} md={12}>
            <Title level={3} className="text-3xl font-bold mb-6">
              Our Location
            </Title>
            <Paragraph className="text-gray-700 text-base mb-6">
              We&apos;d love to hear from you! Whether you have a question about
              our menu, want to make a reservation, or just want to say hello,
              feel free to reach out.
            </Paragraph>
            <Paragraph className="text-gray-700 ">
              <span className="font-semibold">Address:</span> 123, Parakum
              Street, Kurunegala, Sri Lanka
            </Paragraph>
            <Paragraph className="text-gray-700 ">
              <span className="font-semibold">Phone:</span> (+94) 767-593-818
            </Paragraph>
            <Paragraph className="text-gray-700  mb-6">
              <span className="font-semibold">Email:</span>{" "}
              kithminasiriwardana13@gmail.com
            </Paragraph>

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a7c5e4a7b5!2s123%20Gourmet%20Street%2C%20Food%20City%2C%20FC%2012345!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
