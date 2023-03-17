import React from "react";
import { Typography, Layout } from "antd";
import LogoIcon from "../icons/LogoIcon";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import GmailIcon from "../icons/GmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
// import styled from 'styled-components';

const { Footer } = Layout;

export default function EndBar(props) {
  const { color } = props;
  return (
    <Footer
      style={{
        backgroundColor: color === "white" ? "white" : "#10393B",
        // color: "white"
      }}
    >
      {/* <Row style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
        <Col span={1}></Col>
        <Col span={15}>
          <LogoIcon
            color={color === "white" ? "black" : "white"}
            style={{
              marginLeft: "0rem",
            }}
          />
          <Typography.Text
            style={{ color: color === "white" ? "black" : "white" }}
          >
            Minus aut soluta nihil similique earum.
          </Typography.Text>
        </Col>
        <Col span={7}>
          <Typography.Title
            level={1}
            style={{
              margin: 0,
              color: color === "white" ? "black" : "white",
            }}
          >
            Contact us
          </Typography.Title>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GoogleIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GmailIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
        </Col>
        <Col span={1}></Col>
      </Row> */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        <div style={{
          flex: "75%"
        }}>
          <LogoIcon
            color={color === "white" ? "black" : "white"}
            style={{
              marginLeft: "0rem",
            }}
          />
          <Typography.Text
            style={{ color: color === "white" ? "black" : "white" }}
          >
            Minus aut soluta nihil similique earum.
          </Typography.Text>
        </div>
        <div style={{
          flex: "25%"
        }}>
          <Typography.Title
            level={1}
            style={{
              margin: 0,
              color: color === "white" ? "black" : "white",
            }}
          >
            Contact us
          </Typography.Title>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GoogleIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GmailIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
          <div>
            <Typography.Text
              style={{
                color: color === "white" ? "black" : "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon />
              abc@gmail.com
            </Typography.Text>
          </div>
        </div>
      </div>
    </Footer>
  );
}
