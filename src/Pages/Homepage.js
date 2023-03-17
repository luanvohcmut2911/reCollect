import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import EventCard from "../Components/EventCard";
import ProductCard from "../Components/ProductCard";
import { Layout, Typography, FloatButton, Image, Pagination, Button } from "antd";
import { getAll } from "../Firebase/services";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState([]);
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    getAll('items').then((res) => {
      setItemData(res);
    })
    getAll('events').then((res) => {
      setEventData(res);
    })
  }, []);
  console.log(itemData);
  console.log(eventData);
  /*
  
  */
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
            src={eventData[0]?.imageList[0]}
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
              {eventData[0]?.eventTitle}
            </Typography.Title>
            <Typography.Text style={{
              color: "white"
            }}>
              {eventData[0]?.eventDescription}
              <br />
              <Button onClick={() => {
                navigate(`/donate-info/${eventData[0]?.uuid}`)
              }} style={{
                color: "#EF8450",
                fontStyle: "bold"
              }}> Donate now </Button>
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
          {eventData.map((event, uuid) => (
            <EventCard
              eventDescription={event.eventDescription}
              eventItems={event.eventItems}
              eventTitle={event.eventTitle}
              imageList={event.imageList}
              itemOwner={event.itemOwner}
              uuid={event.uuid}
            />
          ))}
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
          {/* // imageList, itemOwner, nameItem, weight, description */}
          {
            itemData.map((item, uuid) => (
              <ProductCard
                pictureSize={500}
                imageList={item.imageList}
                itemName={item.itemName}
                weight={item.weight}
                description={item.description}
                itemOwner={item.itemOwner}
                uuid={item.uuid}
              />
            )
            )
          }

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
