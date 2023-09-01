import React, { useEffect, useState, useContext } from "react";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import EventCard from "../Components/EventCard";
import ProductCard from "../Components/ProductCard";
import { Layout, Typography, FloatButton, Image, Pagination, Button, Skeleton, Card } from "antd";
import { getAll } from "../Firebase/services";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppProvider";

export default function Homepage() {
  const { width, commonBreakPoint, loading, setLoading} = useContext(AppContext);
  const numEachPage = 4;
  const numItemsEachPage = 8;
  const windowWidth = width;
  const navigate = useNavigate();

  const [itemData, setItemData] = useState([]);
  const [eventData, setEventData] = useState([]);

  const [minValuePagination, setMinValuePagination] = useState(0);
  const [maxValuePagination, setMaxValuePagination] = useState(numEachPage);

  const [minValuePaginationItems, setMinValuePaginationItems] = useState(0);
  const [maxValuePaginationItems, setMaxValuePaginationItems] = useState(numItemsEachPage);

  useEffect(() => {
    getAll('items').then((res) => {
      setItemData(res);
      setLoading(false);
    })
    getAll('events').then((res) => {
      setEventData(res);
      setLoading(false);
    })
  }, []);

  const handleChangePagination = (value) => {
    setMinValuePagination((value - 1) * numEachPage);
    setMaxValuePagination(value * numEachPage);
  }

  const handleChangePaginationItems = (value) => {
    setMinValuePaginationItems((value - 1) * numItemsEachPage);
    setMaxValuePaginationItems(value * numItemsEachPage);
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
          textAlign: windowWidth < commonBreakPoint[5] ? "center" : "",
          paddingTop: "40px",
          paddingBottom: "40px"
        }}>
          Ongoing Events
        </Typography.Title>
        <div
          className="spotlight-event"
          style={{
            backgroundColor: "#10393B",
          }}
        >
          {!loading ?
            <div style={{
              display: "flex",
              flexDirection: "row",
              padding: "1.2rem",
              flexWrap: "wrap",
              paddingBottom: "50px",
              borderBottomRightRadius: "50px",
              borderBottomLeftRadius: "50px",
              justifyContent: windowWidth < commonBreakPoint[5] ? "center" : ""
            }}>
              <Image
                width={600}
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
                  justifyContent: "space-around",
                  alignContent: "space-around"
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
            :
            <div style={{
              display: "flex",
              flexDirection: "row",
              padding: "1.2rem",
              flexWrap: "wrap",
              paddingBottom: "50px",
              borderBottomRightRadius: "50px",
              borderBottomLeftRadius: "50px",
              justifyContent: windowWidth < commonBreakPoint[5] ? "center" : ""
            }}>
              <Skeleton />
            </div>
          }
        </div>
        {!loading ?
          <div>
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
              {eventData && eventData.length > 0 && eventData.slice(minValuePagination, maxValuePagination).map((event, uuid) => (
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
                borderBottomLeftRadius: "2000px",
              }}
            >
              <Pagination
                total={eventData.length}
                showTotal={(total) => `Total ${total} items`}
                defaultPageSize={numEachPage}
                defaultCurrent={1}
                onChange={handleChangePagination}
              />
            </div>
          </div> :
          <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#D9D9D9"
          }}>
            <Card style={{
              margin: "1.2rem",
              width: 300,
              height: 650,
            }}>
              <Skeleton />
            </Card>
            <Card style={{
              margin: "1.2rem",
              width: 300,
              height: 650,
            }}>
              <Skeleton />
            </Card>
            <Card style={{
              margin: "1.2rem",
              width: 300,
              height: 650,
            }}>
              <Skeleton />
            </Card>
            <Card style={{
              margin: "1.2rem",
              width: 300,
              height: 650,
            }}>
              <Skeleton />
            </Card>
          </div>}
      </Layout>
      <Layout id="find-your-product">
        <Typography.Title style={{ paddingLeft: "1.2rem" }}>
          {" "}
          Find your products{" "}
        </Typography.Title>
        {!loading ?
          <div>
            <div style={{
              display: "flex"
            }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  margin: "3rem",
                }}
              >
                {itemData && itemData.length > 0 &&
                  itemData.slice(minValuePaginationItems, maxValuePaginationItems).map((item, uuid) => (
                    <ProductCard
                      imageList={item.imageList}
                      itemName={item.itemName}
                      weight={item.weight}
                      description={item.description}
                      itemOwner={item.itemOwner}
                      uuid={item.uuid}
                      key={item.uuid}
                    />
                  )
                  )
                }
              </div>
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
                total={itemData.length}
                showTotal={(total) => `Total ${total} items`}
                defaultPageSize={numItemsEachPage}
                defaultCurrent={1}
                onChange={handleChangePaginationItems}
              />
            </div>
          </div>
          :
          <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "3rem",

          }}>
            {[1,2,3,4,5,6,7,8].map(() => (
              <Card style={{
                margin: "2rem",
                width: 300,
                height: 400,
                borderRadius: "24px",
              }}>
                <Skeleton />
              </Card>
            ))
}
          </div>
        }
      </Layout>
      <EndBar color="green" />
    </div>
  );
}
