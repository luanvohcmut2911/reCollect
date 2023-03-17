import { React, useState, useEffect, useContext } from "react";
import {
  Layout,
  Typography,
  Carousel,
  Image,
  Avatar,
  Button,
  Space,
  Tag,
  Table,
  Modal,
  Drawer,
  List,
  Skeleton,
  Divider,
  Checkbox,
  message
} from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import InfiniteScroll from "react-infinite-scroll-component";
import SuccessModal from "../Components/SuccessModal";
import { AppContext } from "../Context/AppProvider";

const columns = [
  {
    title: "Item",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Condition",
    dataIndex: "condition",
    key: "condition",
  },
];
const yourItems = [
  {
    key: "1",
    name: "Charger",
    age: 5,
    condition: "Used for 5 years - Scratches a little",
  },
  {
    key: "2",
    name: "Charger",
    age: 5,
    condition: "Used for 5 years - Scratches a little",
  },
  {
    key: "3",
    name: "Charger",
    age: 5,
    condition: "Used for 5 years - Scratches a little",
  },
  {
    key: "4",
    name: "Charger",
    age: 5,
    condition: "Used for 5 years - Scratches a little",
  },
  {
    key: "5",
    name: "Box",
    age: 5,
    condition: "Old XBox box, still usable",
  },
  {
    key: "6",
    name: "Monitor",
    age: 3,
    condition: "Additional monitor bought outside of XBox, used for 3 years",
  },
];

const ItemInfo = ({ imageList, itemOwner, itemName, weight, description }) => {
  const { setOpenSuccessModal, openSuccessModal, width } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'Error',
      content: 'Please choose your trade item',
    });
  };
  
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const onChooseYourItem = (e, item) => {
    console.log(`checked = ${e.target.checked}`);
    console.log(e);
    if (e.target.checked) {
      setItemCount(itemCount + 1);
      console.log(item);
    } else {
      setItemCount(itemCount - 1);
    }
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <Layout>
      {contextHolder}
      <NavBar />
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: width < 800 ? "wrap" : "nowrap",
          }}
        >
          <div style={{
            backgroundColor: "#10393B",
            paddingBottom: "50px",
            borderBottomRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            marginBottom: "50px"
          }}>
            <div
              className="carou-fucking-sel"
              style={{
                height: "25rem",
                width: "25rem",
                marginBottom: "50px",
                alignSelf: "center",
                margin: "10px",
                borderRadius: "24px",
                border: "#10393B",
                padding: "2rem",
              }}
            >
              <Carousel
                className="fuckyouANTcarousel"
                autoplay
                dotPosition="bottom"
              >
                <Image
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "24px",
                  }}
                  src="https://picsum.photos/1000"
                />
                <Image
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "24px",
                  }}
                  src="https://picsum.photos/1000"
                />
                <Image
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "24px",
                  }}
                  src="https://picsum.photos/1000"
                />
                <Image
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "24px",
                  }}
                  src="https://picsum.photos/1000"
                />
              </Carousel>
              <Typography.Title
                level={3}
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  color: "#D9D9D9"
                }}
              >
                {" "}
                Old XBox Series X controller{" "}
              </Typography.Title>
            </div>
          </div>
          <div
            style={{
              flexWrap: "wrap",
              flex: "0 1 50%",
              padding: "2rem",
            }}
          >
            <Typography.Title level={2}>
              {" "}
              Old XBox Series X controller{" "}
            </Typography.Title>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "0.2rem",
                margin: "0.2rem",
                alignItems: "center",
              }}
            >
              <Avatar
                size={{
                  xs: 40,
                  sm: 50,
                  md: 50,
                  lg: 50,
                  xl: 50,
                  xxl: 50,
                }}
                style={{
                  margin: "0.2rem",
                }}
                icon={<AntDesignOutlined />}
              />
              <div
                style={{
                  textAlign: "left",
                  padding: "5px",
                  paddingLeft: "10px",
                }}
              >
                <div>
                  <Typography.Title
                    level={5}
                    style={{
                      fontSize: "20px",
                      fontStyle: "bold",
                      margin: 0,
                    }}
                  >
                    {" "}
                    Tri Nhan Pham
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    {" "}
                    @District 8, HCMC
                  </Typography.Text>
                </div>
              </div>
              <Button
                style={{
                  marginLeft: "2rem",
                }}
              >
                {" "}
                Follow{" "}
              </Button>
            </div>

            <div
              className="item-description"
              style={{
                marginLeft: "0.2rem",
                marginRight: "0.2rem",
              }}
            >
              <Typography.Title level={5} type="secondary">
                {" "}
                Updated March 09, 2023{" "}
              </Typography.Title>
              <Typography.Text type="secondary">
                {" "}
                Reviewed and managed by{" "}
                <Tag color="#87d068">NguyenKuteBaoKhanh</Tag>
                <br />
                <Space
                  size={[0, 8]}
                  wrap
                  style={{
                    padding: "1rem",
                  }}
                >
                  <Tag color="magenta">#magenta</Tag>
                  <Tag color="gold">#gold</Tag>
                  <Tag color="green">#green</Tag>
                  <Tag color="cyan">#cyan</Tag>
                  <Tag color="blue">#blue</Tag>
                  <Tag color="purple">#purple</Tag>
                </Space>
              </Typography.Text>
              <Typography.Title level={3}> Description </Typography.Title>
              <Typography.Text
                style={{
                  padding: "5px",
                }}
              >
                Mollit laborum enim non ullamco et occaecat velit nulla tempor
                voluptate adipisicing. Eu reprehenderit eu proident non aliqua
                occaecat anim qui ipsum veniam. Non exercitation eu in fugiat
                anim sunt dolor ad deserunt ut do dolore ipsum. Enim fugiat amet
                tempor eiusmod commodo excepteur culpa. Mollit laborum enim non
                ullamco et occaecat velit nulla tempor voluptate adipisicing. Eu
                reprehenderit eu proident non aliqua occaecat anim qui ipsum
                veniam. Non exercitation eu in fugiat anim sunt dolor ad
                deserunt ut do dolore ipsum. Enim fugiat amet tempor eiusmod
                commodo excepteur culpa. Mollit laborum enim non ullamco et
                occaecat velit nulla tempor
              </Typography.Text>
            </div>

            <div
              className="additional-items"
              style={{
                marginLeft: "0.2rem",
                marginRight: "0.2rem",
              }}
            >
              <Typography.Title level={3}> Additional Items </Typography.Title>
              <Table columns={columns} dataSource={yourItems} />
            </div>
            <Button
              width="100%"
              size="large"
              style={{
                backgroundColor: "#10393B",
                color: "white",
                width: "100%",
                height: "50px",
              }}
              onClick={() => setOpen(true)}
            >
              {" "}
              Request Trade{" "}
            </Button>
          </div>
        </div>
        <Modal
          title="Send a request for this item?"
          centered
          open={openSecondModal}
          onOk={() => {
            setOpenSecondModal(false);
            setOpen(false);
            setOpenSuccessModal(true);
          }}
          onCancel={() => setOpenSecondModal(false)}
        >
          <Typography.Text>
            Here is our community guideline for making request:
            <ul>
              <li> Be responsible for your trade request.</li>
              <li>
                {" "}
                Your trade response may or may not be accepted by the other
                user; however, if it was accepted, please make sure to come to
                an mutual agreement for both sides before making a transaction.{" "}
              </li>
              <li>
                {" "}
                Please be caution that your succeeded trade request will be
                signed digitally on both sides by YOU and the other user. If any
                violation occurs, we will handle the situation based on the
                contract and the laws.
              </li>
            </ul>
          </Typography.Text>
        </Modal>
        <Modal
          title="Choose an item to make the offer"
          centered
          open={open}
          onOk={() => {
            if (itemCount !== 0) {
              setOpenSecondModal(true);
            } else error();
          }}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <div>
            <Typography.Text>
              You can only choose the item you have uploaded onto reCollect. If
              you want to choose another item, please go upload your item.
            </Typography.Text>
            <Typography.Title level={5} type="warning">
              Number of items selected: {itemCount}
            </Typography.Title>
            <InfiniteScroll
              dataLength={data.length}
              next={loadMoreData}
              hasMore={data.length < 50}
              loader={
                <Skeleton
                  avatar
                  paragraph={{
                    rows: 1,
                  }}
                  active
                />
              }
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.email}
                    actions={[
                      <Checkbox onChange={onChooseYourItem}></Checkbox>,
                      <Button
                        style={{
                          margin: "20px",
                        }}
                        onClick={showDrawer}
                      >
                        {" "}
                        More{" "}
                      </Button>,
                    ]}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} />}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                    <div>
                    </div>
                  </List.Item>
                )}
              />
              <Drawer
                title="Drawer with extra actions"
                placement="right"
                width={500}
                onClose={onCloseDrawer}
                open={openDrawer}
                extra={
                  <Space>
                    <Button onClick={onCloseDrawer}>Cancel</Button>
                    <Button type="primary" onClick={onCloseDrawer}>
                      OK
                    </Button>
                  </Space>
                }
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </InfiniteScroll>
          </div>
        </Modal>
        <SuccessModal
          openSuccessModal={openSuccessModal}
          setOpenSuccessModal={setOpenSuccessModal}
        />
      </div>
      <EndBar />
    </Layout>
  );
};

export default ItemInfo;
