import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import EventCard from "../Components/EventCard";
import ProductCard from "../Components/ProductCard";
import { Layout, Typography, FloatButton, Image, Pagination, Button } from "antd";
import { getAll } from "../Firebase/services";


export default function Homepage() {
  const [itemData, setItemData] = useState([]);
  const [eventData, setEventData] = useState([]); 
  useEffect(()=>{
    getAll('items').then((res)=>{
      setItemData(res);
      console.log(res);
    })
    getAll('events').then((res)=>{
      setEventData(res);
      console.log(res);
    })
  },[]);

  // lay info trong data (items) bo vo component
  //total = data.length
  return (
    <div>
      <Layout>
        <NavBar />
      </Layout>
      <FloatButton.BackTop />
      <Layout className="ongoing-events">
        <Typography.Title style={{
          paddingLeft: "1.2rem",
          margin: 0,
          padding: "30px",
          backgroundColor: "#10393B",
          color: "white",
        }}>
          Ongoing Events
        </Typography.Title>
        <div
          className="spotlight-event"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: "1.2rem",
            flexWrap: "wrap",
            backgroundColor: "#10393B",
            paddingBottom: "50px",
            borderBottomRightRadius: "50px",
            borderBottomLeftRadius: "50px",
          }}
        >
          <Image
            width={636}
            height={400}
            src="https://picsum.photos/601"
            style={{
              borderRadius: "30px",
            }}
            preview="false"
          />
          <div
            style={{
              alignSelf: "center",
              margin: "1.1rem",

            }}
          >
            <Typography.Title level={2} style={{
              color: "white"
            }}>
              Clothes & shoes donations in Ho Chi Minh City
            </Typography.Title>
            <Typography.Text style={{
              color: "white"
            }}>
              {" "}
              The MyStorage donation box, located in front of the MyStorage
              warehouse at 375 Xa Lo Hanoi, is emptied on a bi-weekly basis and
              all contents are donated to Light Charity.
              <br />
              <a href="/donate-info" style={{
                color: "#EF8450",
                fontStyle: "bold"
              }}>Donate now </a>
            </Typography.Text>
          </div>
        </div>
        <div
          className="event"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#D9D9D9"
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.2rem",
            backgroundColor: "#D9D9D9",
            borderBottomRightRadius: "2000px",
            borderBottomLeftRadius: "24px",
          }}
        >
          <Pagination
            total={85}
            showSizeChanger
            showTotal={(total) => `Total ${total} items`}
            pageSize={5}
          />
        </div>
      </Layout>
      <Layout className="find-your-product">
        <Typography.Title style={{ paddingLeft: "1.2rem" }}>
          {" "}
          Find your products{" "}
        </Typography.Title>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1.2rem",
          }}
        >
          <Pagination
            total={85}
            showSizeChanger
            showTotal={(total) => `Total ${total} items`}
          />
        </div>
      </Layout>
      <EndBar color="green" />
    </div>
  );
}
