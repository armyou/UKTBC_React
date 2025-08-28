/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  InputNumber,
  Card,
  Typography,
  Row,
  Col,
  Select,
  message,
} from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { loadStripe } from "@stripe/stripe-js";
import { donateNow } from "../../../api_calls/donationsApi";
import countries from "world-countries"; // ✅ npm install world-countries
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

const stripePromise = loadStripe("pk_test_51RxuzdQ5LN6AbcmTsFe3rpYO1qVdqiJCysfZH1Zb8Uq5kltWc9qEibl2Bg6aXxT2IyNp2cqz1cMswzKIrCAK0EYr003oOHFYFE"); // your publishable key
const GETADDRESS_API_KEY = "YOUR_GETADDRESS_IO_API_KEY"; // 👈 replace with real key

const DonateNow: React.FC = () => {
  const [form] = Form.useForm();
  const [isCompany, setIsCompany] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("United Kingdom");

  const [addresses, setAddresses] = useState<string[]>([]);
  const [manualEntry, setManualEntry] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    values.ClaimGiftAid = values.ClaimGiftAid === "yes";

    try {
      const response = await donateNow(values);
      if (response?.sessionId) {
        const stripe = await stripePromise;
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: response.sessionId,
          });
          if (error) {
            console.error("Stripe redirect error:", error.message);
          }
        }
      }
    } catch (err) {
      console.error("Donation failed:", err);
    }
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);

    if (value !== "United Kingdom") {
      form.setFieldsValue({ ClaimGiftAid: "no" });
    } else {
      form.resetFields(["ClaimGiftAid"]);
    }
  };

  // 🔍 Fetch address list from getAddress.io
  const findAddress = async () => {
    const postcode = form.getFieldValue("companyPostcode");
    if (!postcode) {
      message.warning("Please enter a postcode first");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.getaddress.io/find/${postcode}?api-key=${GETADDRESS_API_KEY}`
      );

      if (data?.addresses?.length) {
        setAddresses(data.addresses);
        message.success("Addresses found. Please select one.");
      } else {
        message.error("No addresses found for this postcode.");
      }
    } catch (error) {
      message.error("Failed to fetch addresses. Check postcode or API key.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddressSelect = (address: string) => {
    // split into parts: "House, Street, Town, County"
    const parts = address.split(",");
    form.setFieldsValue({
      companyAddress: parts.slice(0, 2).join(", "),
      companyCity: parts[parts.length - 3] || "",
    });
  };

  return (
    <div className="donate-container">
      <Card className="donate-card col-sm-8">
        <Title level={3} className="donate-title">
          Donate Now
        </Title>

        <Form layout="vertical" onFinish={onFinish} form={form}>
          {/* Personal Details */}
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="firstName" rules={[{ required: true }]}>
                <Input placeholder="Enter first name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="lastName" rules={[{ required: true }]}>
                <Input placeholder="Enter last name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                <Input placeholder="Enter email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="phone" rules={[{ required: true }]}>
                <Input placeholder="Enter phone number" />
              </Form.Item>
            </Col>
          </Row>

          {/* Donation on behalf of company */}
          <Form.Item
            name="onBehalfOfCompany"
            label="Is the donation on behalf of a company?"
            rules={[{ required: true }]}
          >
            <Radio.Group onChange={(e) => setIsCompany(e.target.value === "yes")}>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          {isCompany && (
            <Form.Item name="companyName" rules={[{ required: true }]}>
              <Input placeholder="Enter company name" />
            </Form.Item>
          )}

          {/* ✅ Address lookup for UK */}
          {selectedCountry === "United Kingdom" && !manualEntry && (
            <>
              <Row gutter={16}>
                <Col xs={16}>
                  <Form.Item
                    name="companyPostcode"
                    rules={[{ required: true, message: "Enter UK postcode" }]}
                  >
                    <Input placeholder="Enter postcode" />
                  </Form.Item>
                </Col>
                <Col xs={8}>
                  <Button
                    type="default"
                    onClick={findAddress}
                    loading={loading}
                    style={{ marginTop: 4 }}
                    className="donate-button"
                  >
                    Find Address
                  </Button>
                </Col>
              </Row>

              {addresses.length > 0 && (
                <Form.Item label="Select Address">
                  <Select
                    placeholder="Choose address"
                    onChange={handleAddressSelect}
                  >
                    {addresses.map((addr, idx) => (
                      <Option key={idx} value={addr}>
                        {addr}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              )}

              <Button
                type="link"
                onClick={() => setManualEntry(true)}
                style={{ paddingLeft: "1vw", color: "var(--color-secondary)", border: "1px solid var(--color-secondary)", marginBottom: "1vh" }}
              >
                Enter address manually
              </Button>
            </>
          )}

          {/* Manual entry (or non-UK) */}
          {(manualEntry || selectedCountry !== "United Kingdom") && (
            <>
              <Form.Item name="companyAddress" rules={[{ required: true }]}>
                <Input placeholder="Enter address line" />
              </Form.Item>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="companyCity" rules={[{ required: true }]}>
                    <Input placeholder="Enter city" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="companyPostcode" rules={[{ required: true }]}>
                    <Input placeholder="Enter postcode" />
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}

          {/* Country select */}
          <Form.Item
            name="companyCountry"
            rules={[{ required: true, message: "Please select a country" }]}
          >
            <Select
              showSearch
              placeholder="Select country"
              onChange={handleCountryChange}
            >
              {countries
                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                .map((c) => (
                  <Option key={c.cca2} value={c.name.common}>
                    {c.name.common}
                  </Option>
                ))}
            </Select>
          </Form.Item>

          {/* Donation Details */}
          <Form.Item name="donationAmount" rules={[{ required: true }]}>
            <InputNumber
              min={1}
              style={{ width: "100%" }}
              placeholder="Enter donation amount (£)"
            />
          </Form.Item>

          <p style={{ color: "var(--color-text)", marginBottom: "1rem" }}>
            Only UK residences are able to claim Gift Aid.
          </p>

          <Form.Item
            name="ClaimGiftAid"
            label="Please claim Gift Aid on my donation"
            rules={[{ required: true }]}
          >
            <Radio.Group disabled={selectedCountry !== "United Kingdom"}>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="isThisPersonalMoney" valuePropName="checked">
            <Checkbox>This donation is my personal money</Checkbox>
          </Form.Item>

          {/* Captcha */}
          <div style={{ marginBottom: 20 }}>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={(value: React.SetStateAction<string | null>) =>
                setCaptchaValue(value)
              }
            />
          </div>

          {/* Submit */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="donate-button col-sm-8"
            >
              Make Payment
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default DonateNow;
