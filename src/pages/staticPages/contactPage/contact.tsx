// import React from 'react'
import type { CSSProperties } from "react";
import { useState } from "react";
import gopuram from "../../../assets/gopuram.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import { Form, Input, Select, Upload, Button, Row, Col } from "antd";
const { Option } = Select;
const { TextArea } = Input;
import "./contactPage.css";

const Contact: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };
  const [fileName, setFileName] = useState<string>("");
  return (
    <div className="main_container">
      <div className="contact_us-container">
        <div className="contact_us-image_container">
          <img
            src={backgroundFrame}
            alt="Background Frame"
            className="background-img"
          ></img>
          <img src={gopuram} alt="Gopuram" className="overlay-img"></img>
          <div className="contact_us-text">
            <h1>Contact Us</h1>
            <p>
              Get in touch for questions, suggestions, or to join our growing
              dharmic community.
            </p>
          </div>
        </div>
      </div>
      <div className="vertical_spacer"></div>
      <div className="contsct_us-container">
        <div className="contact_us-title">
          <h3>Need help? Reach out using the form below or via email.</h3>
        </div>
        <div className="vertical_spacer"></div>
        <div
          className="contact-form-container"
          style={{ display: "flex", gap: "2rem" }}
        >
          <Form
            className="contact-form saffron-form"
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={handleSubmit}
            style={{ flex: 1, maxWidth: "800px" }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Mobile"
                  name="mobile"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your mobile number" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select Category">
                    <Option value="general">General Inquiry</Option>
                    <Option value="support">Support</Option>
                    <Option value="donation">Donation</Option>
                    <Option value="event">Event</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Subject"
              name="subject"
              className="inline-field"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter subject" />
            </Form.Item>

            <Form.Item name="message" rules={[{ required: true }]}>
              <TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>

            {/* Custom File Upload */}
            <Form.Item
              label="File"
              name="file"
              className="inline-field file-field"
            >
              <div style={{ width: "100%" }}>
                <Input
                  value={fileName}
                  readOnly
                  suffix={
                    <span
                      style={{
                        lineHeight: "10px",
                        color: "#888",
                        fontSize: "12px",
                      }}
                    >
                      Max 3MB
                    </span>
                  }
                  onClick={() =>
                    document.getElementById("hiddenFileInput")?.click()
                  }
                />
                <input
                  id="hiddenFileInput"
                  type="file"
                  accept=".jpg,.png,.pdf"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      if (e.target.files[0].size > 3 * 1024 * 1024) {
                        alert("File size must be less than 3MB");
                        e.target.value = "";
                        setFileName("");
                      } else {
                        setFileName(e.target.files[0].name);
                      }
                    }
                  }}
                />
              </div>
            </Form.Item>
            <div></div>
            <div className="form_description" style={{ marginTop: "1rem" }}>
              <p>
                Note: We aim to respond to enquiries within 48 hours. As UKTBC
                is run on a voluntary basis, response times may vary and could
                occasionally be delayed. Thank you for your patience.
              </p>
            </div>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ width: "10.417vw", left: "45%" }}
              >
                Submit
              </Button>
            </Form.Item>
            <br />
          </Form>

          <div className="contact_us-side_container" style={{ flex: 1 }}>
            <div>
              <h4>For General Enquiry</h4>
              <p>info@uktbc.org</p>
            </div>
            <div>
              <h4>For Donation & Fundraising</h4>
              <p>donate@uktbc.org</p>
            </div>
            <div>
              <h4>For Volunteer Enquiry</h4>
              <p>volunteer@uktbc.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
