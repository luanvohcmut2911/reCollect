import React, { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Space,
  Image,
  List,
  Button,
  Pagination,
} from "antd";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import { useParams } from "react-router";
import { getAccount } from "../Firebase/services";
import Maps from "../apis/googleMapsAPI/Maps"

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires.",
// ];

function DonateInfo() {
  const [donateInfoData, setDonateInfoData] = useState(null);
  let { uuid } = useParams();
  console.log(uuid);
  useEffect(() => {
    // getAccount("events", {
    //   fieldName: "uuid",
    //   operator: "==",
    //   compareValue: uuid
    // }).then((data) => {
    //   setDonateInfoData(data[0]);
    //   console.log(data);
    // });
    getAccount("events", {
      fieldName: "uuid",
      operator: "==",
      compareValue: uuid
    }).then((data) => {
      setDonateInfoData(data[0])
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
    // console.log('123');
  }, [uuid]);
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <Typography.Title
          style={{
            padding: "1.7rem",
            margin: 0,
            backgroundColor: "#10393B",
            color: "white"
          }}
        >
          {" "}
          {donateInfoData?.eventTitle}
        </Typography.Title>
        <Space direction="horizontal" wrap>
          <Space direction="vertical" wrap>
            <Layout
              style={{
                padding: "1.7rem",
                marginBottom: 0,
                backgroundColor: "#10393B",
                paddingBottom: "50px",
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                width: "100%"
              }}
            >
              <Typography.Title level={3} style={{ color: "white" }}>
                1. About this campaign
              </Typography.Title>
              <Space direction="vertical" >
                <Typography.Text style={{ color: "white" }}>
                  {donateInfoData?.eventDescription}
                </Typography.Text>
                <Space
                  direction="horizontal"
                  wrap
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    padding: "1.7em",
                  }}
                >
                  <Button type="primary" shape="round" size="large" style={{
                    color: "white",
                    backgroundColor: "#EF8450",
                  }}>
                    Make a donate
                  </Button>
                  <Button type="primary" shape="round" size="large" style={{
                    color: "#EF8450",
                    borderColor: "#EF8450",
                    backgroundColor: "#10393B"
                  }}>
                    Save for later
                  </Button>
                </Space>
              </Space>
            </Layout>
            <div
              style={{
                padding: "1.7rem",
              }}
            >
              <Typography.Title level={3} style={{

                marginTop: 0,
              }}>
                2. Item that you can donate
              </Typography.Title>
              <List
                header={<div>List of items</div>}
                bordered
                size={"small"}
                dataSource={donateInfoData?.eventItems.split(",")}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </div>
          </Space>
          <div
            style={{
              width: "100%",
              marginRight: 0
            }}>
            <Typography.Title level={3} style={{
              padding: "1.7rem",
              marginTop: 0,
            }}>
              3. Gallery
            </Typography.Title>
            <br />
            <div
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                width: "100%"
              }}
            >
              {donateInfoData?.imageList.map((image) => (
                <Image
                  width={350}
                  style={{
                    borderRadius: "24px",
                    padding: "1.2em",
                  }}
                  src={image}
                />)
              )}
            </div>
          </div>

        </Space>
      </Layout.Content>
      <Space
        direction="vertical"
        style={{
          paddingTop: "1.2rem",
        }}
      >
        <Space
          direction="vertical"
          style={{
            padding: "1.7rem",
          }}
        >
          <Typography.Title level={2}> Locate us </Typography.Title>
          <Typography.Text>
            Please consider donate in-place if you are available or near our
            meet-up destination.
          </Typography.Text>
        </Space>
        <Maps center={donateInfoData?.location} />
      </Space>
      <EndBar />
    </Layout>
  );
}
// lat: 10.7814503
// lng:  106.6551703                                                                                          
export default DonateInfo;
