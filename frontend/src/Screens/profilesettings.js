import React from "react";
import Navbar from "./Navbar";
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  Avatar,
  notification,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Option } = Select;

function ProfileSettings({ Toggle }) {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    notification.success({
      message: "Profile Updated",
      description: "Your changes have been saved successfully.",
      placement: "topRight",
    });
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar Toggle={Toggle} />
      <div className="container my-5 d-flex justify-content-center">
        <Card className="p-4 shadow" style={{ width: "1000px" }}>
          <div className="d-flex align-items-center mb-4">
            <Avatar
              className="bg-dark"
              size={64}
              icon={<UserOutlined />}
              style={{ marginRight: "16px" }}
            />

            <div>
              <h3 className="fw-bold">Takudzwa Mumvanga</h3>
              <p>takudzwa4580@gmail.com</p>
              <Button type="primary" disabled>
                Active
              </Button>
            </div>
          </div>

          <h3>Personal Information</h3>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your first name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input placeholder="Enter your last name" />
                </Form.Item>
              </Col>
            </Row>

            <h3>Residential Information</h3>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select placeholder="Select your country">
                    <Option value="Zimbabwe">Zimbabwe</Option>
                    <Option value="Zambia">Zambia</Option>
                    <Option value="South Africa">South Africa</Option>
                    <Option value="Namibia">Namibia</Option>
                    <Option value="Malawi">Malawi</Option>
                    <Option value="Botswana">Botswana</Option>
                    <Option value="Lesotho">Lesotho</Option>
                    <Option value="Tanzania">Tanzania</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    { required: true, message: "Please input your city!" },
                  ]}
                >
                  <Input placeholder="Enter your city" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Street and Number"
                  name="streetNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your street and number!",
                    },
                  ]}
                >
                  <Input placeholder="Enter street and number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Postal Code"
                  name="postalCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your postal code!",
                    },
                  ]}
                >
                  <Input placeholder="Enter postal code" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ProfileSettings;
