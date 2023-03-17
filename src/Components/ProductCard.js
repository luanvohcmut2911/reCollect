import { React, useState } from "react";
import { Card, Button, Avatar, Typography, Modal } from "antd";
import {
  SwapOutlined,
  EllipsisOutlined,
  UnorderedListOutlined,
  StopOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ pictureSize, imageList, itemOwner, nameItem, weight, description }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Card
      hoverable
      style={{
        margin: "1.2rem",
        width: 200,
        borderRadius: "24px",
      }}
      cover={
        <img
          alt="event"
          style={{
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
          }}
          src={imageList[0]}
        />
      }
      onPress={() => {
        navigate("/item-info");
      }}
      actions={[
        <Button icon={<SwapOutlined key="Trade" />} href="/item-info" style={{
          color: "#EF8450"
        }}>
          Trade
        </Button>,
        <Button icon={<EllipsisOutlined key="More" />} onClick={showModal}>
          {" "}
          More{" "}
        </Button>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
        title={nameItem}
        description={itemOwner}
      />
      <Modal
        title="Product Name"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Typography.Title level={3}>{nameItem}</Typography.Title>
          <Typography.Title level={4}>Description</Typography.Title>
          <p>{description}</p>
          <p>
            <Typography.Title level={5}>Weight</Typography.Title>
            {weight}
          </p>
          <p>
            <Typography.Title level={5}>Gallery</Typography.Title>
            {imageList.map((image) => 
              <img
                alt="event"
                style={{
                  borderRadius: "24px",
                }}
                src={image}
              />
            )}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <Button>
            <UnorderedListOutlined />
            Add to Watch list
          </Button>
          <Button>
            <StopOutlined />
            Not interested
          </Button>
          <Button>
            <FlagOutlined />
            Report
          </Button>
        </div>
      </Modal>
    </Card>
  );
};

export default ProductCard;
