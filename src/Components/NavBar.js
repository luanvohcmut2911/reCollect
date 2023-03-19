import React, { useContext } from "react";
import { Menu, Layout, Avatar, Row, Col, Input, Popover, Image } from "antd";
import styled from "styled-components";
import { MessageOutlined, BellOutlined, SwapOutlined, MedicineBoxOutlined, SearchOutlined, HomeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import LogoIcon from "../icons/LogoIcon";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/config";
import { AppContext } from "../Context/AppProvider";
import { StickyContainer, Sticky } from "react-sticky";

const items = [
  {
    label: "Donation",
    key: "Donation",
    icon: <MedicineBoxOutlined />
  },
  {
    label: "Bartering",
    key: "Bartering",
    icon: <SwapOutlined />,
  },
  {
    label: "About",
    key: "About",
    icon: <QuestionCircleOutlined />
  },
];

const { Search } = Input;

const { Header } = Layout;

const MenuStyled = styled(Menu)`
  background-color: #10393b;
  font-size: 20px;
  .ant-menu-item {
    margin: 1rem;
  }
  .ant-menu-item-selected {
    margin: 1rem;
    background-color: white !important;
    color: #10393b !important;
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
    cursor: pointer;
  }
`;

export default function NavBar() {
  const profileData = JSON.parse(localStorage.getItem('data'));
  const navigate = useNavigate();
  const { width, commonBreakPoint, betweenPagesNav } = useContext(AppContext);
  const windowWidth = width;
  const handleSignOut = async (auth) => {
    const logOut = await signOut(auth);
    try {
      console.log(logOut);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StickyContainer>
      <Sticky>
        {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => (
          <header style={style}>
            {/* ... */}
          </header>
        )}
      </Sticky>
      <Header
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Row
          style={{
            backgroundColor: "#10393B",
          }}
        >
          <Col span={4}>
            <a href="/home">
              {windowWidth < commonBreakPoint[3] ?
                <HomeOutlined
                  style={{
                    color:"white",
                    float: "left",
                    margin: "10px",
                    fontSize: "40px"
                  }} />
                :
                <LogoIcon
                  color="white"
                  style={{
                    float: "left",
                    margin: "16px 24px 16px 1rem",
                  }}
                />}

            </a>
          </Col>
          <Col span={6}>
            <MenuStyled
              style={{
                backgroundColor: "#10393B !important",
                left: (windowWidth < commonBreakPoint[3]) ? "0px" : ""
              }}
              theme="dark"
              mode="horizontal"
              items={items}
              onSelect={(item) => {
                if (item.key === "Bartering") {
                  const element = document.getElementById("find-your-product");
                  if (element) {
                    element.scrollIntoView();
                  } else {
                    betweenPagesNav("find-your-product");
                  }

                } else if (item.key === "Donation") {
                  const element = document.getElementById("ongoing-events");
                  if (element) {
                    element.scrollIntoView();
                  } else {
                    navigate("/home");
                  }
                } else if (item.key === "About") {
                  navigate("/about");
                }
              }}
            ></MenuStyled>
          </Col>
          <Col span={10}>
            {
              (windowWidth < commonBreakPoint[3]) ? null : <Search
                placeholder="Search..."
                style={{
                  padding: "1rem",
                }}
              />
            }
          </Col>
          <Col span={4}>
            <RightStyled>
              {(windowWidth < commonBreakPoint[3]) ? <SearchOutlined style={{
                color: "white",
                fontSize: "35px",
                padding: "1rem",
                float: (windowWidth < commonBreakPoint[3]) ? "left" : ""
              }} /> : null}
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
                    >
                      Profile
                    </TextStyled>
                    <TextStyled
                      onClick={() => {
                        handleSignOut(auth);
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
                  <Image preview={false} src={profileData.photoURL} alt="avatar"/>
                </Avatar>
              </Popover>
            </RightStyled>
          </Col>
        </Row>
      </Header>
    </StickyContainer>

  );
}
