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
  Checkbox,
  notification
} from "antd";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import SuccessModal from "../Components/SuccessModal";
import { AppContext } from "../Context/AppProvider";
import { useParams } from "react-router";
import { getAccount, addDocument } from "../Firebase/services";

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

const ItemInfo = () => {
  const { setOpenSuccessModal, width, loading, setLoading } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [api, contextHolder] = notification.useNotification();

  const [itemInfoData, setItemInfoData] = useState({});
  const [userData, setUserData] = useState({});
  const [itemsOfUserData, setItemsOfUserData] = useState([]);
  const [itemsChosenToTrade, setItemsChosenToTrade] = useState([]);
  let { uuid } = useParams();
  useEffect(() => {
    getAccount("items", {
      fieldName: "uuid",
      operator: "==",
      compareValue: uuid
    }).then((data) => {
      setItemInfoData(data[0]);
      // setLoading(false);
      getAccount("users", {
        fieldName: "uid",
        operator: "==",
        compareValue: data[0]?.itemOwner
      }).then((userData) => {
        setUserData(userData[0]);
        setLoading(false);
      })
    });
    getAccount("items", {
      fieldName: "itemOwner",
      operator: "==",
      compareValue: JSON.parse(localStorage.getItem('data'))?.uid
    }).then((itemsOfUserData) => {
      setItemsOfUserData(itemsOfUserData);
      setLoading(false);
    })
  }, [uuid]);
  const error = () => {
    api.warning({
      message: 'Please choose at least 1 item'
    })
  };
  const onChooseYourItem = (e, item) => {
    if (e.target.checked) {
      setItemCount(itemCount + 1);
      setItemsChosenToTrade([
        ...itemsChosenToTrade,
        item
      ]);
    } else {
      setItemCount(itemCount - 1);
      let tmp = itemsChosenToTrade;
      let index = tmp.indexOf(item);
      if (index !== -1) {
        tmp.splice(index, 1);
        setItemsChosenToTrade(tmp);
      }
    }
  };
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
              {!loading ?
                <div>
                  <Carousel
                    className="fuckyouANTcarousel"
                    autoplay
                    dotPosition="bottom"
                  >
                    {itemInfoData.imageList?.map((image, index) => (
                      <Image
                        key={image}
                        width="100%"
                        height="100%"
                        style={{
                          borderRadius: "24px",
                        }}
                        src={image}
                      />
                    ))}
                  </Carousel>
                  <Typography.Title
                    level={3}
                    style={{
                      alignSelf: "center",
                      textAlign: "center",
                      color: "#D9D9D9"
                    }}
                  >
                    {/* {itemInfoData?.itemName} */
                      (itemInfoData === null) ? null : itemInfoData.itemName
                    }
                  </Typography.Title>
                </div>
                : <Skeleton />}
            </div>
          </div>
          <div
            style={{
              flexWrap: "wrap",
              flex: "0 1 50%",
              padding: "2rem",
            }}
          >
            {
              !loading
                ?
                <div>
                  <Typography.Title level={2}>
                    {" "}
                    {itemInfoData?.itemName}
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
                      icon={<img src={userData?.photoURL} alt='avatar' />}
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

                          {userData?.lastName} {" "} {userData?.firstName}
                        </Typography.Title>
                        <Typography.Text type="secondary">
                          {" "}
                          @{userData?.address}
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
                </div>
                : <Skeleton />
            }

            {!loading
              ?
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
                  {itemInfoData?.description}
                </Typography.Text>
              </div>
              : <Skeleton />}

            {!loading ?
              <div>
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
                  onClick={() => {
                    if (userData?.uid !== JSON.parse(localStorage.getItem('data'))?.uid) {
                      setOpen(true)
                    }
                    else {
                      api.error({
                        message: 'Cannot request by yourself'
                      })
                    }
                  }}
                >
                  {" "}
                  Request Trade{" "}
                </Button>
              </div> : <Skeleton />}
          </div>
        </div>
        <Modal
          title="Send a request for this item?"
          centered
          open={openSecondModal}
          onOk={() => {
            setOpenSecondModal(false);
            setOpen(false);
            addDocument('requests', {
              fromUser: JSON.parse(localStorage.getItem('data'))?.uid,
              fromUserFirstName: JSON.parse(localStorage.getItem('data'))?.firstName,
              fromUserLastName: JSON.parse(localStorage.getItem('data'))?.lastName,
              itemTrade: itemsChosenToTrade.map((item) => {
                return item.uuid;
              }),
              toUser: userData?.uid
            }).then(() => {
              console.log('added to requests collection successfully');
              
              // window.location.reload(false);
            })
            setOpenSuccessModal(true);
          }}
          onCancel={() => {
            setOpenSecondModal(false)
          }}
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
            <List
              dataSource={itemsOfUserData}
              renderItem={(item) => (
                <div>
                  <List.Item key={item.uuid}
                    actions={[
                      <Checkbox onChange={(e) => onChooseYourItem(e, item)}></Checkbox>,
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
                      title={item.itemName}
                      description={item.weight + "kg"}
                    />
                    <div>
                    </div>
                  </List.Item>
                  <Drawer
                    title={item.itemName}
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
                    <div>
                      <Typography.Title level={3}>{item.itemName}</Typography.Title>
                      <Typography.Title level={4}>Description</Typography.Title>
                      <p>{item.description}</p>
                      <p>
                        <Typography.Title level={5}>Weight</Typography.Title>
                        {item.weight}
                      </p>
                      <p>
                        <Typography.Title level={5}>Gallery</Typography.Title>
                        {item.imageList.map((image) =>
                          <img
                            key={image}
                            alt="event"
                            style={{
                              borderRadius: "24px",
                            }}
                            src={image}
                          />
                        )}
                      </p>
                    </div>
                  </Drawer>
                </div>
              )}
            />
          </div>
        </Modal>
        <SuccessModal
          userFacebook={userData?.facebookLink}
        />
      </div>
      <EndBar />
    </Layout>
  );
};

export default ItemInfo;
