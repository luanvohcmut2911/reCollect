import React, { useState, useContext, useEffect } from "react";
import { Menu, Space, Card, Button } from "antd";
import styled from "styled-components";
import ItemAddButton from "../asset/ItemAddButton.png";
import EventImage from "../asset/EventImage.png";
import { AppContext } from "../Context/AppProvider";
import { getAccount } from "../Firebase/services";

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
  const [itemList, setItemList] = useState([]);
  const { setAddModalVisible, setEventModalVisible } = useContext(AppContext);
  const currentUserUid = JSON.parse(localStorage.getItem("data")).uid;
  const isAdmin = JSON.parse(localStorage.getItem("data")).isAdmin;
  const handleAdd = () => {
    setAddModalVisible(true);
  };
  const handleChange = (e) => {
    setPage(e.key);
  };

  useEffect(() => {
    getAccount("items", {
      fieldName: "itemOwner",
      operator: "==",
      compareValue: currentUserUid,
    }).then((data) => {
      setItemList(data);
    });
  }, [currentUserUid]);
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
          {itemList.map((i) => {
            return (
              <ImageStyled key={i.nameItem} src={i.imageList[0]} alt="item" />
            );
          })}
        </Space>
      ) : (
        <Space wrap>
          <CardStyled hoverable cover={<img src={EventImage} alt="event" />}>
            <Card.Meta title="Old books donation on Nguyen Van Binh Street, HCMC" />
          </CardStyled>
          {isAdmin ? <Button onClick={()=>{
            setEventModalVisible(true);
          }} >Only Admin can use this button</Button> : ""}
        </Space>
      )}
    </div>
  );
}
