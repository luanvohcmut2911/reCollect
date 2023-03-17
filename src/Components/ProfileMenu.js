import React, { useState, useContext } from "react";
import { Menu, Space, Card } from "antd";
import styled from "styled-components";
import ItemProfile from "../asset/ItemProfile.png";
import ItemAddButton from "../asset/ItemAddButton.png";
import EventImage from "../asset/EventImage.png";
import { AppContext } from "../Context/AppProvider";

const items = [
  {
    label: "Items",
    key: "1",
  },
  {
    label: "Saved Events",
    key: "2",
  },
];

const ImageStyled = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 24px;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const ImageAddButtonStyled = styled.img`
  padding: 40px 40px;
  border: solid;
  border-radius: 24px;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const MenuStyled = styled(Menu)`
  background-color: white;
  .ant-menu-item {
    margin: 1rem;
    border-radius: 300px;
    color: #10393b;
  }
  .ant-menu-item-selected {
    margin: 1rem;
    background-color: #10393b !important;
    color: white !important;
    border-radius: 30px;
  }
`;

const CardStyled = styled(Card)`
  width: 250px;
  margin: 1rem 1rem 1rem 4rem;
  border-radius: 24px;
`;

export default function ProfileMenu() {
  const [page, setPage] = useState("1");
  const { setAddModalVisible } = useContext(AppContext);
  const handleAdd = () => {
    setAddModalVisible(true);
  };
  const handleChange = (e) => {
    setPage(e.key);
  };
  return (
    <div>
      <MenuStyled
        items={items}
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={["1"]}
        onClick={handleChange}
      />
      {page === "1" ? (
        <Space
          size={[8, 16]}
          wrap
          style={{
            marginLeft: "2rem",
          }}
        >
          <ImageAddButtonStyled
            src={ItemAddButton}
            alt="item"
            onClick={handleAdd}
          />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
          <ImageStyled src={ItemProfile} alt="item" />
        </Space>
      ) : (
        <Space wrap>
          <CardStyled hoverable cover={<img src={EventImage} alt="event" />}>
            <Card.Meta title="Old books donation on Nguyen Van Binh Street, HCMC" />
          </CardStyled>
          <CardStyled hoverable cover={<img src={EventImage} alt="event" />}>
            <Card.Meta title="Old books donation on Nguyen Van Binh Street, HCMC" />
          </CardStyled>
          <CardStyled hoverable cover={<img src={EventImage} alt="event" />}>
            <Card.Meta title="Old books donation on Nguyen Van Binh Street, HCMC" />
          </CardStyled>
          <CardStyled hoverable cover={<img src={EventImage} alt="event" />}>
            <Card.Meta title="Old books donation on Nguyen Van Binh Street, HCMC" />
          </CardStyled>
        </Space>
      )}
    </div>
  );
}
