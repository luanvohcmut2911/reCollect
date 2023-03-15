import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import NavBar from "../Components/NavBar";
import ProfileCard from "../Components/ProfileCard";
import ProfileMenu from "../Components/ProfileMenu";
const { Content } = Layout;

// const {
//   token: { colorBgContainer },
// } = theme.useToken();

export default function Profile() {
  return (
    <Layout
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "white",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Typography.Title
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#10393B",
          margin: 0,
          padding: "2rem 0 4rem",
          color: "white",
          borderRadius: "0 0 30px 30px",
        }}
      >
        {" "}
        PROFILE{" "}
      </Typography.Title>
      <Content>
        <Row>
          <Col span={2}></Col>
          <Col span={6}>
            <ProfileCard />
          </Col>
          <Col span={16}>
            <ProfileMenu />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
