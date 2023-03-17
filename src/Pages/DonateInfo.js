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
    console.log('copium');
    getAccount("events", {
      fieldName: "uuid",
      operator: "==",
      compareValue: uuid
    }).then((data) => {
      setDonateInfoData(data[0])
      console.log(data);
    }).catch((err)=>{
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
                dataSource={donateInfoData?.eventItems}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </div>
          </Space>
          <Typography.Title level={3} style={{
            padding: "1.7rem",
            marginTop: 0,
          }}>
            3. Gallery
          </Typography.Title>
          <Space
            direction="horizontal"
            wrap
            style={{
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
              paddingBottom: "50px",
              borderBottomRightRadius: "50px",
              borderBottomLeftRadius: "50px",
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
            {/* {imageList?.map((image) => (
              
            ))} */}
          </Space>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              padding: "2rem",

            }}
          >
            <br />
            <Pagination
              total={85}
              showSizeChanger
              showTotal={(total) => `Total ${total} items`}
              pageSize={5}
            />
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.49524122255!2d106.69876695099104!3d10.773330262157684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4743648f3d%3A0x16ce95918cb14834!2sSaigon%20Centre!5e0!3m2!1svi!2s!4v1678703624556!5m2!1svi!2s"
          width={"100%"}
          height={"400px"}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map-api"
        ></iframe>
      </Space>
      <EndBar />
    </Layout>
  );
}

export default DonateInfo;
