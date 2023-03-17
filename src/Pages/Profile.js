import React, { useContext } from "react";
import { Layout, Row, Col, Typography } from "antd";
import { AppContext } from "../Context/AppProvider";
import NavBar from "../Components/NavBar";
import ProfileCard from "../Components/ProfileCard";
import ProfileMenu from "../Components/ProfileMenu";
import EndBar from "../Components/EndBar";
const { Content } = Layout;

// const {
//   token: { colorBgContainer },
// } = theme.useToken();

export default function Profile() {
  const { width, commonBreakPoint } = useContext(AppContext);
  const windowWidth = width;
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
        {(windowWidth < commonBreakPoint[2]) ?
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
          }}>
            <ProfileCard />
            <ProfileMenu style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center"
            }} />
          </div>
          :
          <Row>
            <Col span={2}></Col>
            <Col span={6}>
              <ProfileCard />
            </Col>
            <Col span={16}>
              <ProfileMenu />
            </Col>
          </Row>}
      </Content>
      <EndBar />
    </Layout>
  );
}
