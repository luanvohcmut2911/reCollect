import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import styled from "styled-components";
import { UserOutlined, GoogleOutlined, LockOutlined } from "@ant-design/icons";

const WrapperStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`

const onFinish = (values) => {
  console.log("Success:", values);
};
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
const Signin = () => {
  return (
    <WrapperStyled>
      <Form
        name="normal-login"
        style={{
          width: '500px',
          backgroundColor: "white",
          padding: "5rem",
          borderRadius: "24px",

        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title>Sign In</Typography.Title>
        <Typography.Text>
          New user? <a href="/signup">Create new account</a>
        </Typography.Text>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username! " }]}
        >
          <InputStyled
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <InputStyled
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="123">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
          <Button type="default" style={{ width: "100%" }}>
            <GoogleOutlined />
            Log in with Google
          </Button>
        </Form.Item>
      </Form>
    </WrapperStyled>
  );
};

export default Signin;
