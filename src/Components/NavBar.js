import React from "react";
import { Menu, Layout, Avatar, Row, Col, Input, Popover } from "antd";
import styled from "styled-components";
import { MessageOutlined, BellOutlined } from "@ant-design/icons";
import LogoIcon from "../icons/LogoIcon";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Bartering",
  },
  {
    label: "Donation",
  },
];

const { Search } = Input;

const { Header } = Layout;

const MenuStyled = styled(Menu)`
  background-color: #10393B;
  .ant-menu-item{
    margin: 1rem;
  }
  .ant-menu-item-selected {
    margin: 1rem;
    background-color: white !important;
    color: #10393B !important;
  }
`;

const RightStyled = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextStyled = styled.div`
  font-size: 20px;
  &:hover {
    background-color: grey;
    cursor: pointer
  }
`;

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Header style={{
      margin: 0,
      padding: 0
    }}>
      <Row style={{
        backgroundColor: '#10393B'
      }} >
        <Col span={4}>
          <a href="/home">
            <LogoIcon
              color="white"
              style={{
                float: "left",
                margin: "16px 24px 16px 1rem",
              }}
            />
          </a>
        </Col>
        <Col span={6}>
          <MenuStyled
            style={{
              backgroundColor: "#10393B !important",
            }}
            theme="dark"
            mode="horizontal"
            items={items}
          ></MenuStyled>
        </Col>
        <Col span={10}>
          <Search
            placeholder="Search..."
            style={{
              padding: "1rem",
            }}
          />
        </Col>
        <Col span={4}>
          <RightStyled>
            <MessageOutlined
              style={{
                color: "white",
                fontSize: "35px",
                padding: "1rem",
              }}
            />
            <BellOutlined
              style={{
                color: "white",
                fontSize: "35px",
                padding: "1rem",
              }}
            />
            <Popover
              content={
                <div>
                  <TextStyled
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >Profile</TextStyled>
                  <TextStyled
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Logout
                  </TextStyled>
                </div>
              }
              trigger="click"
            >
              <Avatar
                size="default"
                style={{
                  margin: "1rem",
                  justifyContent: "center",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                A
              </Avatar>
            </Popover>
          </RightStyled>
        </Col>
      </Row>
    </Header>
  );
}
