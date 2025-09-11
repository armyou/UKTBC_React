import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../../assets/uktbcLogo.png";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { toast } from "react-toastify";

const { Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: { username: string; password: string }) => {
    console.log("Login values:", values);
    toast.success("Login successful!");
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/admin");
  };

  return (
    <div className="login-container">
      {/* Animated Background Elements */}
      <div className="dharma-background">
        <div className="om-symbol om-1">ॐ</div>
        <div className="om-symbol om-2">ॐ</div>
        <div className="om-symbol om-3">ॐ</div>
        <div className="lotus-petal petal-1"></div>
        <div className="lotus-petal petal-2"></div>
        <div className="lotus-petal petal-3"></div>
        <div className="lotus-petal petal-4"></div>
        <div className="lotus-petal petal-5"></div>
        <div className="lotus-petal petal-6"></div>
        <div className="floating-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
        </div>
        <div className="mandala-pattern"></div>
      </div>

      <Card className="login-card col-sm-8 col-lg-5">
        <div className="login-card-glow"></div>
        <Title level={3} className="login-title">
          <span className="title-om">ॐ</span> Admin Login
        </Title>
        <div className="login-card-content col-sm-12 row">
          <div className="logo-container col-sm-12 col-md-5">
            <div className="logo-glow"></div>
            <img src={logo} alt="" className="login-image" />
          </div>
          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            className="login-form col-sm-12 col-md-7"
          >
            <p className="form-note">
              Please enter your email and password to login
            </p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter username"
                className="login-input"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter password"
                className="login-input"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="login-button"
              >
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
