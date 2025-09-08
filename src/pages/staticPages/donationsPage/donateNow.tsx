import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Row, Col } from "antd";
import { Icon } from "@iconify/react";
import gopuram from "../../../assets/gopuram.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import "./DonateNow.css";

const DonateNow: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [isCompany, setIsCompany] = useState<"yes" | "no">("no");
  const [form] = Form.useForm();
  const [showManualAddress, setShowManualAddress] = useState(false);
  const donationType = Form.useWatch("donationType", form);
  const presetAmounts = ["11", "51", "116", "516", "1116"];

  return (
    <div className="main_container">
      <div className="donate_now-container">
        <div className="contact_us-image_container">
          <img
            src={backgroundFrame}
            alt="Background Frame"
            className="background-img"
          ></img>
          <img src={gopuram} alt="Gopuram" className="overlay-img"></img>
          <div className="contact_us-text">
            <h1>Support Our Dharma, Culture & Community</h1>
            <p>
              Your contribution helps sustain Vedic education, cultural
              preservation, and community service.
            </p>
          </div>
        </div>
        <div className="donate_now-form_container">
          <div className="donate-container">
            <div className="donate_noe-bank_details">
              <p
                className="donate-title h2"
                style={{ fontWeight: "600", color: "#E65100" }}
              >
                Donate by Bank Transfer
              </p>
              <p className="muted_color">
                If you prefer to donate directly from your bank, please use the
                details below:
              </p>
              <p>
                <strong>Account name:</strong>UK Telugu Brahmin Community
              </p>
              <p>
                <strong>Sort Code:</strong>08-92-99
              </p>
              <p>
                <strong>Account number:</strong>67344000
              </p>
              <p>
                <strong>Bank:</strong>The Co-operative Bank
              </p>
              <p className="muted_color">
                Note: Please include your full name as the payment reference
                when making the transfer. Alternatively, if you’d like to donate
                securely using our online payment options, please continue
                below.
              </p>
            </div>
            <p className="h2" style={{ fontWeight: 600, color: "#E65100" }}>
              Donate to UKTBC
            </p>
            <Form
              form={form}
              layout="horizontal"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              className="donation-form"
            >
              {/* First Name / Last Name */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    className="label-firstName"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Enter First Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true }]}
                    className="label-lastName"
                  >
                    <Input placeholder="Enter Last Name" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Email / Mobile */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true }]}
                    className="label-email"
                  >
                    <Input placeholder="Enter Email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Mobile"
                    name="mobile"
                    rules={[{ required: true }]}
                    className="label-mobile"
                  >
                    <Input placeholder="Enter Mobile" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Company Donation */}
              <Form.Item name="companyDonation">
                <p className="h4">Is this donation on behalf of company?</p>
                <Radio.Group
                  onChange={(e) => setIsCompany(e.target.value)}
                  value={isCompany}
                >
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Radio.Group>
              </Form.Item>

              {/* If company donation */}
              {isCompany === "yes" && (
                <>
                  <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true }]}
                    className="label-companyName"
                  >
                    <Input placeholder="Enter Company Name" />
                  </Form.Item>
                </>
              )}

              {/* Note */}
              <p className=" ">
                Note: Postcode lookup is for UK addresses only. For overseas or
                missing addresses, enter manually.
              </p>

              {/* Postcode / Find Address */}
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="Postcode"
                    name="postcode"
                    rules={[{ required: true }]}
                    className="label-postcode"
                  >
                    <Input placeholder="Enter Postcode" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Button className="find_address-btn" type="primary">
                    Find Address
                  </Button>
                </Col>
                <Col span={8}>
                  <Button
                    className="enter_manually-btn"
                    type="primary"
                    onClick={() => setShowManualAddress((prev) => !prev)}
                  >
                    {showManualAddress ? "Hide Address" : "Enter Manually"}
                  </Button>
                </Col>
              </Row>

              {/* Address fields */}
              {showManualAddress && (
                <>
                  <Form.Item
                    label="Address Line 1 *"
                    name="address1"
                    rules={[{ required: true }]}
                    className="label-address1"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Address Line 2"
                    name="address2"
                    className="label-address2"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Address Line 3"
                    name="address3"
                    className="label-address3"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Town / City *"
                    name="city"
                    rules={[{ required: true }]}
                    className="label-city"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Country *"
                    name="country"
                    rules={[{ required: true }]}
                    className="label-country"
                  >
                    <Select
                      defaultValue="United Kingdom"
                      disabled={isCompany === "yes"}
                    >
                      <Select.Option value="United Kingdom">
                        United Kingdom
                      </Select.Option>
                      <Select.Option value="India">India</Select.Option>
                      <Select.Option value="USA">USA</Select.Option>
                      <Select.Option value="Other">Other</Select.Option>
                    </Select>
                  </Form.Item>
                </>
              )}

              {/* Company Donation = simple amount input */}
              {isCompany === "yes" && (
                <Form.Item
                  label="Amount (GBP)"
                  name="donationAmount"
                  rules={[{ required: true }]}
                  className="label-amountGBP"
                >
                  <Input
                    prefix={<Icon icon="mdi:currency-gbp" />}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </Form.Item>
              )}

              {/* Personal Donation = amount buttons + input + donation type + gift aid */}
              {isCompany === "no" && (
                <>
                  <Row gutter={16} align="middle">
                    <Col span={12}>
                      <div className="amount-buttons">
                        {presetAmounts.map((amt) => (
                          <Button
                            className="preset-amount-btn"
                            key={amt}
                            onClick={() => {
                              setAmount(amt);
                              form.setFieldsValue({ donationAmount: amt });
                            }}
                          >
                            <Icon icon="mdi:currency-gbp" />
                            {amt}
                          </Button>
                        ))}
                      </div>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Donation Amount"
                        name="donationAmount"
                        rules={[
                          {
                            required: true,
                            message: "Please enter donation amount",
                          },
                        ]}
                        className="label-donationAmount"
                      >
                        <Input
                          prefix={<Icon icon="mdi:currency-gbp" />}
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                          placeholder="Enter custom amount"
                          className="input-donationAmount"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    label="Payment Reference"
                    name="paymentReference"
                    className="label-paymentReference"
                  >
                    <Input placeholder="Enter Payment Reference" />
                  </Form.Item>
                  {/* Donation Type */}
                  <Form.Item label="Donation Type" name="donationType">
                    <Radio.Group
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === "fundraising") {
                          form.setFieldsValue({ giftAidClaim: "no" });
                        } else {
                          form.setFieldsValue({ giftAidClaim: undefined });
                        }
                      }}
                    >
                      <Radio value="own">I’m donating my own money</Radio>
                      <Radio value="fundraising">
                        I’m Paying money from fundraising or a collection
                      </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <p>Boost your donation by 25% With Gift Aid</p>
                  <p>
                    Your donation of £100.00 would be worth £125.00 at no extra
                    cost to you.
                  </p>

                  {/* Gift Aid */}
                  <Form.Item
                    label="Please Claim Gift Aid on my donation"
                    name="giftAidClaim"
                    className="label-giftAidClaim"
                  >
                    <Radio.Group disabled={donationType !== "own"}>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <p className="gift-aid-info">
                    I want to Gift Aid my donation and any donations I make in
                    the future or have made in the past 4 years, to UK Telugu
                    Brahmin Community (1205566). I am a UK taxpayer and
                    understand that if I pay less Income Tax and/or Capital
                    Gains Tax than the amount of Gift Aid claimed on all of my
                    donations in that tax year, it is my responsibility to pay
                    any difference. UK Telugu Brahmin Community (1205566) will
                    claim 25p on every £1 donated.
                  </p>
                </>
              )}

              {/* Always show payment reference if company */}
              {isCompany === "yes" && (
                <Form.Item
                  label="Payment Reference"
                  name="paymentReference"
                  className="label-paymentReference"
                >
                  <Input placeholder="Enter Payment Reference" />
                </Form.Item>
              )}

              {/* Stripe + PayPal at bottom (keep existing implementation) */}
              {/* Payment buttons */}
              <div className="donate-buttons">
                <p className="h4" style={{ color: "#E65100" }}>
                  Donate with
                </p>
                <Button
                  type="primary"
                  icon={<Icon icon="logos:paypal" width="3.813vw" />}
                />
                <Button
                  type="default"
                  icon={<Icon icon="logos:stripe" width="7.813vw" />}
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
