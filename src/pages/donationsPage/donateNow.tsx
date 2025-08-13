import React, { useState } from 'react';
import { Form, Input, Button, Radio, Checkbox, InputNumber, Card, Typography, Row, Col } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';

const { Title } = Typography;

const DonateNow: React.FC = () => {
  const [form] = Form.useForm();
  const [isCompany, setIsCompany] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    // if (!captchaValue) {
    //   alert('Please complete the captcha verification');
    //   return;
    // }
    console.log('Donation details:', { ...values, captcha: captchaValue });
    form.resetFields();
    setCaptchaValue(null);
  };

  return (
    <div className="donate-container">
      <Card className="donate-card col-sm-8">
        <Title level={3} className="donate-title">Donate Now</Title>

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
              <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
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
            <Radio.Group onChange={(e) => setIsCompany(e.target.value === 'yes')}>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          {isCompany && (
            <>
              <Form.Item name="companyName" rules={[{ required: true }]}>
                <Input placeholder="Enter company name" />
              </Form.Item>
              <Form.Item name="companyAddress" rules={[{ required: true }]}>
                <Input placeholder="Enter address" />
              </Form.Item>
              <Form.Item name="companyCity" rules={[{ required: true }]}>
                <Input placeholder="Enter city" />
              </Form.Item>
              <Form.Item name="companyPostcode" rules={[{ required: true }]}>
                <Input placeholder="Enter postcode" />
              </Form.Item>
              <Form.Item name="companyCountry" rules={[{ required: true }]}>
                <Input placeholder="Enter country" />
              </Form.Item>
            </>
          )}

          {/* Donation Details */}
          <Form.Item name="donationAmount" rules={[{ required: true }]}>
            <InputNumber min={1} style={{ width: '100%' }} placeholder="Enter donation amount" />
          </Form.Item>

          <Form.Item
            name="giftAid"
            label="Please claim Gift Aid on my donation"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="personalMoney" valuePropName="checked">
            <Checkbox>This donation is my personal money</Checkbox>
          </Form.Item>

          {/* Captcha */}
          <div style={{ marginBottom: 20 }}>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={(value: React.SetStateAction<string | null>) => setCaptchaValue(value)}
            />
          </div>

          {/* Submit */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block className='donate-button col-sm-8'>
              Donate
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default DonateNow;