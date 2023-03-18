import React, { useEffect, useState, useContext } from "react";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import EventCard from "../Components/EventCard";
import ProductCard from "../Components/ProductCard";
import { Layout, Typography, FloatButton, Image, Pagination, Button } from "antd";
import { getAll } from "../Firebase/services";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppProvider";

export default function Homepage() {
  const { width, commonBreakPoint } = useContext(AppContext);
  const windowWidth = width;
  const navigate = useNavigate();
  const [itemData, setItemData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const numEachPage = 4;
  const [minValuePagination, setMinValuePagination] = useState(0);
  const [maxValuePagination, setMaxValuePagination] = useState(numEachPage);
  const [pageEvent, setPageEvent] = useState(1);
  useEffect(() => {
    getAll('items').then((res) => {
      setItemData(res);
    })
    getAll('events').then((res) => {
      setEventData(res);
    })
  }, []);

  const handleChangePagination = (value) => {
    setPageEvent(value);
    setMinValuePagination((value - 1) * numEachPage);
    setMaxValuePagination(value * numEachPage);
  }
  return (
    <div style={{
      position: 'relative'
    }}>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 69
      }}>
        <NavBar />
      </div>
      <FloatButton.BackTop />
      <Layout id="ongoing-events">
        <Typography.Title style={{
          paddingLeft: "1.2rem",
          margin: 0,
          padding: "30px",
          backgroundColor: "#10393B",
          color: "white",
          textAlign: windowWidth < commonBreakPoint[5] ? "center" : ""
        }}>
          Ongoing Events
        </Typography.Title>
        <div
          className="spotlight-event"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "1.2rem",
            flexWrap: "wrap",
            backgroundColor: "#10393B",
            paddingBottom: "50px",
            borderBottomRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            justifyContent: windowWidth < commonBreakPoint[5] ? "center" : ""
          }}
        >
          <Image
            width={636}
            height={400}
            src={eventData[0]?.imageList[0]}
            style={{
              borderRadius: "30px",
              flex: "50%",
              padding: "1rem"
            }}
            preview="false"
          />
          <div
            style={{
              alignSelf: "center",
              flex: "50%",
              margin: "1rem",
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
              {eventData[0]?.eventDescription.toString().slice(0, 400)}...
              <a href={`/donate-info/${eventData[0]?.uuid}`}> Show more </a>
              <br />
              <Button onClick={() => {
                navigate(`/donate-info/${eventData[0]?.uuid}`);
              }} style={{
                color: "#EF8450",
                fontStyle: "bold",
                margin: "5px"
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
          {eventData && eventData.length > 0 && eventData.slice(minValuePagination, maxValuePagination).map((event) => (
            <EventCard
              eventDescription={event.eventDescription}
              eventItems={event.eventItems}
              eventTitle={event.eventTitle}
              imageList={event.imageList}
              itemOwner={event.itemOwner}
              uuid={event.uuid}
              key={event.uuid}
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
            borderBottomLeftRadius: "2000px",
          }}
        >
          <Pagination
            current={pageEvent}
            total={eventData.length}
            showTotal={(total) => `Total ${total} items`}
            defaultPageSize={numEachPage}
            onChange={handleChangePagination}
          />
        </div>
      </Layout>
      <Layout id="find-your-product">
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
            itemData.map((item) => (
              <ProductCard
                key={item.uuid}
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
