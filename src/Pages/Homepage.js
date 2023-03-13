import { React, useState } from 'react'
import NavBar from '../Components/NavBar';
import { Layout, Typography, Card, FloatButton, Image, Avatar, Dropdown, Button, Modal } from 'antd';
import { SwapOutlined, EllipsisOutlined, UnorderedListOutlined, StopOutlined, FlagOutlined } from '@ant-design/icons';

// const handleMenuClick = (e) => {
//   alert('Click on menu item.');
//   console.log('click', e);
// };

// const DropdownMenuItems = [
//   {
//     label: 'Add to Watchlist',
//     key: '1',
//     icon: <UnorderedListOutlined />
//   },
//   {
//     label: 'Not interested',
//     key: '2',
//     icon: <StopOutlined />
//   },
//   {
//     label: 'Report',
//     key: '3',
//     icon: <FlagOutlined />
//   }
// ]

// const menuProps = {
//   DropdownMenuItems,
//   onClick: handleMenuClick,
// }



export default function Homepage() {

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

  const EventCard = () => {
    return (
      <Card
        hoverable
        style={{
          margin: "1.2rem",
          width: 277.3,
          height: 300,
        }}
        cover={
          <img alt="event" style={{
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
            width: 277.3,
            height: 200
          }} src="https://picsum.photos/501" />
        }
      >
        <Card.Meta
          title="Old books donation on Nguyen Van Binh Street, HCMC"
          description={<a href="/home">Donate now</a>}
        />
      </Card>
    )
  }

  const ProductCard = ({ pictureSize }) => {
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
            // width: 200,
            // height: 250,
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
              Add to Watchlist
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

  return (
    <div>
      <NavBar />
      <FloatButton.BackTop />
      <Layout className="ongoing-events">
        <Typography.Title style={{paddingLeft: "1.2rem"}}>Ongoing Events</Typography.Title>
        <div className="spotlight-event"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: "1.2rem",
            flexWrap: "wrap"
          }}
        >

          <Image
            width={636}
            height={400}
            src="https://picsum.photos/601"
            style={{
              borderRadius: "30px",
            }}
            preview='false'
          />
          <div
            style={{
              alignSelf: "center",
              margin: "1.2rem"
            }}>
            <Typography.Title level={2}>Clothes & shoes donations in Ho Chi Minh City</Typography.Title>
            <Typography.Text> The MyStorage donation box, located in front of the MyStorage warehouse at 375 Xa Lo Hanoi, is emptied on a bi-weekly basis and all contents are donated to Light Charity.</Typography.Text>
          </div>
        </div>
        <div className="event"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </Layout>
      <Layout className="find-your-product">
        <Typography.Title style={{paddingLeft: "1.2rem"}}> Find your products </Typography.Title>
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <ProductCard pictureSize={500} />
          <ProductCard pictureSize={200} />
          <ProductCard pictureSize={300} />
          <ProductCard pictureSize={1000} />
          <ProductCard pictureSize={1232} />
          <ProductCard pictureSize={222} />
          <ProductCard pictureSize={232} />
          <ProductCard pictureSize={232} />
          <ProductCard pictureSize={2323} />
          <ProductCard pictureSize={500} />
          <ProductCard pictureSize={200} />
          <ProductCard pictureSize={300} />
          <ProductCard pictureSize={1000} />
          <ProductCard pictureSize={1232} />
          <ProductCard pictureSize={222} />
          <ProductCard pictureSize={232} />
          <ProductCard pictureSize={232} />
          <ProductCard pictureSize={2323} />
        </div>
      </Layout>
    </div>
  )
}
