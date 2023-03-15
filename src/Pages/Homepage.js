import { React } from 'react'
import NavBar from '../Components/NavBar';
import EndBar from '../Components/EndBar';
import EventCard from '../Components/EventCard';
import ProductCard from '../Components/ProductCard';
import { Layout, Typography, FloatButton, Image, Pagination } from 'antd';

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

  return (
    <div>
      <Layout>
        <NavBar />
      </Layout>
      <FloatButton.BackTop />
      <Layout className="ongoing-events">
        <Typography.Title style={{ paddingLeft: "1.2rem" }}>Ongoing Events</Typography.Title>
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
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.2rem"
        }}>
          <Pagination
            total={85}
            showSizeChanger
            showTotal={(total) => `Total ${total} items`}
            pageSize={5}
          />
        </div>
      </Layout>
      <Layout className="find-your-product">
        <Typography.Title style={{ paddingLeft: "1.2rem" }}> Find your products </Typography.Title>
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
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.2rem"
        }}>
          <Pagination
            total={85}
            showSizeChanger
            showTotal={(total) => `Total ${total} items`}
          />
        </div>
      </Layout>
      <EndBar color='green' />
    </div>

  )
}
