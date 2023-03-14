import React from "react";
import { Button, Form, Input, Typography, Row, Col, DatePicker } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GoogleIcon from "../icons/GoogleIcon";
import background from '../asset/bgSignup.png';

const WrapperStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

const DatePickerStyled = styled(DatePicker)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`

const InputPasswordStyled = styled(Input.Password)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

const onFinish = (values) => {
  console.log("Success:", values);
};

export default function Signup() {
  const [step, setStep] = React.useState(1);
  return (
    <WrapperStyled>
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
        <Form
        name="normal-login"
        style={{
          width: "500px",
          height: "85vh",
          backgroundColor: "white",
          padding: "1.5rem 2.5rem 6rem 2.5rem",
          borderRadius: "24px",
        }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Text>Step {step} of 2</Typography.Text>
        <Typography.Title style={{ marginTop: 0 }}>
          Create an account
        </Typography.Title>
          <div
            style={{
              contentVisibility: step===1?"visible":"hidden"
            }}
          >
            <Button
              type="default"
              style={{
                width: "100%",
                borderRadius: "50px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
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
            <Form.Item
              label={<Typography.Text strong>Username:</Typography.Text>}
              name="username"
              rules={[
                { required: true, message: "Please enter your username! " },
              ]}
            >
              <InputStyled
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              label={<Typography.Text strong>Password:</Typography.Text>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <InputPasswordStyled
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              style={{
                position: "relative",
              }}
            >
              <Button
                type="primary"
                style={{
                  borderRadius: "50px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  backgroundColor: '#10393B'
                }}
                onClick={() => {
                  setStep(2);
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
            </Form.Item>
            <Form.Item>
              <Typography.Text>Already have an account? </Typography.Text>
              <a href="/signin" style={{ textDecoration: "underline" }}>
                Sign in
              </a>
            </Form.Item>
          </div>
          <div
            style={{
              contentVisibility: step===2?"visible":"hidden"
            }}
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  label={<Typography.Text strong>First name:</Typography.Text>}
                  name="firstName"
                  rules={[
                    { required: true, message: "Please enter your username! " },
                  ]}
                  style={{
                    display: "flex",
                  }}
                >
                  <InputStyled
                    placeholder="First name"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<Typography.Text strong>Last name:</Typography.Text>}
                  name="lastName"
                  rules={[
                    { required: true, message: "Please enter your username! " },
                  ]}
                  style={{
                    display: "flex",
                  }}
                >
                  <InputStyled
                    placeholder="Last name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label={<Typography.Text strong>Date of birth:</Typography.Text>}
              name="dateOfBirth"
              rules={[
                { required: true, message: "Please input your date of birth!" },
              ]}
            >
              <DatePickerStyled
                placeholder="Date of birth"
              />
            </Form.Item>
            <Form.Item
              label={<Typography.Text strong>Your address:</Typography.Text>}
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <InputStyled
                placeholder="Your address"
              />
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
                  backgroundColor: '#10393B'
                }}
                onClick={() => {
                  setStep(2);
                }}
              >
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Done
                </Typography.Text>
              </Button>
              <Button
                style={{
                  borderRadius: "50px",
                  padding: "24px",
                  marginRight: '1rem',
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                }}
                onClick={() => {
                  setStep(1);
                }}
              >
                <Typography.Text
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Back
                </Typography.Text>
              </Button>
            </Form.Item>
          </div>
      </Form>
        </Col>
      </Row>
    </WrapperStyled>
  );
}
