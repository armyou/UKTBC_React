import React from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from "../../assets/uktbcLogo.png";
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate()
;
  const onFinish = (values: { username: string; password: string }) => {
    console.log('Login values:', values);
    message.success("login successful!");
    navigate('/admin')
  };

  return (
    <div className="login-container">
      <Card className="login-card col-sm-8">
        <Title level={3} className="login-title">Admin Login</Title>
        <div className="login-card-content col-sm-12 row">
          <img src={logo} alt="" className="col-sm-5" />
          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            className='col-sm-5'
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter username"  className='login-input'/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Enter password" className='login-input'/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className='login-button'>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
