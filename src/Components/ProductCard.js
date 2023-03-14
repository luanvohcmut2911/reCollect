import { React, useState } from 'react';
import { Card, Button, Avatar, Typography, Modal } from 'antd';
import { SwapOutlined, EllipsisOutlined, UnorderedListOutlined, StopOutlined, FlagOutlined } from '@ant-design/icons';

const ProductCard = ({ pictureSize }) => {
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
                borderRadius: "24px"
            }}
            cover={
                <img alt="event" style={{
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                }} src={`https://picsum.photos/${pictureSize}`} />
            }
            actions={[
                <Button icon={<SwapOutlined key="Trade" />} href="/home">
                    Trade</Button>,
                <Button icon={<EllipsisOutlined key="More" />} onClick={showModal}> More </Button>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                title="Old XBox Series X controller"
                description="5 year old XBox Series X controller"
            />
            <Modal title="Product Name" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <Typography.Title level={3}>Product Info</Typography.Title>
                    <p>5 year old XBox Series X controller</p>
                    <p>5 year old XBox Series X controller</p>
                    <p>5 year old XBox Series X controller</p>
                    <p>5 year old XBox Series X controller</p>
                    <p>5 year old XBox Series X controller</p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "center"
                }}>
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
    )
}

export default ProductCard;