import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GoogleIcon from "../icons/GoogleIcon";

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
`;

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
          width: "500px",
          backgroundColor: "white",
          padding: "0rem 2.5rem 5rem 2.5rem",
          borderRadius: "24px",
        }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title>Sign in</Typography.Title>
        <Typography.Text>
          New user? <a href="/signup">Create new account</a>
        </Typography.Text>
        <Form.Item
          label={<Typography.Text strong>Username:</Typography.Text>}
          name="username"
          rules={[{ required: true, message: "Please enter your username! " }]}
        >
          <InputStyled
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          label={<Typography.Text strong>Password:</Typography.Text>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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

          <a className="login-form-forgot" href="/" style={{
            float: 'right'
          }} >
            Forgot your password?
          </a>
        </Form.Item>

        <Form.Item
          style={{
            position: "relative",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              borderRadius: "50px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              float: "right",
            }}
          >
            <Typography.Text
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Continue
            </Typography.Text>
          </Button>
          <div
            style={{
              width: "100%",
              height: "20px",
              borderBottom: "1px solid black",
              textAlign: "center",
              clear: "right",
              paddingTop: "1rem",
              marginBottom: "2rem",
              padding: 0,
            }}
          >
            <span
              style={{
                fontSize: "20px",
                backgroundColor: "#F3F5F6",
                padding: "0 10px",
              }}
            >
              Or
            </span>
          </div>
          <Button
            type="default"
            style={{
              width: "100%",
              borderRadius: "50px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GoogleIcon />
            <Typography.Text
              strong
              style={{
                fontSize: "20px",
                marginLeft: "1rem",
              }}
            >
              Continue with Google
            </Typography.Text>
          </Button>
        </Form.Item>
      </Form>
    </WrapperStyled>
  );
};

export default Signin;
