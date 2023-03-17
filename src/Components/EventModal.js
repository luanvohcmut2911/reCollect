import React, { useContext, useState } from "react";
import { Modal, Row, Col, Form, Input, Typography, Button, Upload } from "antd";
import { AppContext } from "../Context/AppProvider";
import styled from "styled-components";
import InputImage from "../asset/InputImage.png";
import ImgCrop from "antd-img-crop";
import { addDocument } from "../Firebase/services";
import { getImageURL } from "../Firebase/getImageURL";


const ModalStyled = styled(Modal)`
  .ant-modal-body {
    height: 80vh;
  }
`;

const UploadStyled = styled(Upload)`
  display: ${(props) => {
    if (!props.fileLength) {
      return "none";
    }
    return "";
  }} !important;
`;

const { Dragger } = Upload;

export default function EventModal() {
  const currentUserUid = JSON.parse(localStorage.getItem('data'))?.uid;
  const { eventModalVisible, setEventModalVisible, width, commonBreakPoint } = useContext(AppContext);
  const windowWidth = width;
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onFinish = (values)=>{
    const imageURL = getImageURL(fileList);
    console.log(values);
    imageURL.then((data)=>{
      addDocument('items', {
        ...values,
        imageList: data,
        itemOwner: currentUserUid
      });
      // setAddModalVisible(false);
      window.location.reload(false);
    })  
  }
  return (
    <ModalStyled
      width="70vw"
      height="100vh"
      closable={false}
      open={eventModalVisible}
      footer={null}
      onCancel={() => {
        setEventModalVisible(false);
      }}
    >
      {
        (windowWidth < commonBreakPoint[2]) ?
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}>
            <ImgCrop>
              <Dragger
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  display: fileList.length === 0 ? "" : "none",
                }}
                customRequest={({ file, onSuccess }) => {
                  setTimeout(() => {
                    onSuccess("ok");
                  }, 0);
                }}
                fileList={fileList}
                onChange={onChange}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={InputImage} alt="input" />
                  <Typography.Title>Drag your photo here</Typography.Title>
                  <Typography.Text>or</Typography.Text>
                  <Button
                    style={{
                      backgroundColor: "#10393B",
                      marginTop: "1rem",
                      border: "#10393B",
                      width: "80%",
                      borderRadius: "50px",
                      color: "white",
                      marginBottom: "1rem",
                    }}
                  >
                    Select from your computer
                  </Button>
                </div>
              </Dragger>
            </ImgCrop>
            <ImgCrop>
              <UploadStyled
                fileLength={fileList.length}
                style={{
                  display: fileList.length === 0 ? "none" : "",
                }}
                customRequest={({ file, onSuccess }) => {
                  setTimeout(() => {
                    onSuccess("ok");
                  }, 0);
                }}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
              >
                {fileList.length < 5 && "+ Upload"}
              </UploadStyled>
            </ImgCrop>
            <Form
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label={<Typography.Text>Title of event</Typography.Text>}
                rules={[
                  { required: true, message: "Please input type of items" },
                ]}
                name='eventTitle'
              >
                <Input placeholder="Enter title for events" />
              </Form.Item>
              <Form.Item
                label={
                  <Typography.Text>
                    Short description for your events
                  </Typography.Text>
                }
                name='description'
              >
                <Input placeholder="Description ..." />
              </Form.Item>
              <Form.Item
                label={
                  <Typography.Text>
                    Short description for your events
                  </Typography.Text>
                }
                name='description'
              >
                <Input placeholder="Description ..." />
              </Form.Item>

              <Form.Item
                label={
                  <Typography.Text>
                    Short description for your events
                  </Typography.Text>
                }
                name='description'
              >
                <Input placeholder="Description ..." />
              </Form.Item>
              
              <Form.Item label={<Typography.Text>Weight</Typography.Text>}>
                <Input placeholder="Weight of item" suffix="kg" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </div>
          :
          <Row
            style={{
              height: "75vh",
            }}
          >
            <Col span={16}>
              <ImgCrop>
                <Dragger
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    display: fileList.length === 0 ? "" : "none",
                  }}
                  customRequest={({ file, onSuccess }) => {
                    setTimeout(() => {
                      onSuccess("ok");
                    }, 0);
                  }}
                  fileList={fileList}
                  onChange={onChange}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={InputImage} alt="input" />
                    <Typography.Title>Drag your photo here</Typography.Title>
                    <Typography.Text>or</Typography.Text>
                    <Button
                      style={{
                        backgroundColor: "#10393B",
                        marginTop: "1rem",
                        border: "#10393B",
                        width: "80%",
                        borderRadius: "50px",
                        color: "white",
                        marginBottom: "1rem",
                      }}
                    >
                      Select from your computer
                    </Button>
                  </div>
                </Dragger>
              </ImgCrop>
              <ImgCrop>
                <UploadStyled
                  fileLength={fileList.length}
                  style={{
                    display: fileList.length === 0 ? "none" : "",
                  }}
                  customRequest={({ file, onSuccess }) => {
                    setTimeout(() => {
                      onSuccess("ok");
                    }, 0);
                  }}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                >
                  {fileList.length < 5 && "+ Upload"}
                </UploadStyled>
              </ImgCrop>
            </Col>
            <Col span={8}>
              <Form
                layout="vertical"
                onFinish={(value) => {
                  console.log(value);
                }}
              >
                <Form.Item
                  label={<Typography.Text>Type of events</Typography.Text>}
                  rules={[
                    { required: true, message: "Please input type of items" },
                  ]}
                >
                  <Input placeholder="Type of item ..." />
                </Form.Item>
                <Form.Item
                  label={
                    <Typography.Text>
                      Short description for your item
                    </Typography.Text>
                  }
                >
                  <Input placeholder="Description ..." />
                </Form.Item>
                <Form.Item label={<Typography.Text>Weight</Typography.Text>}>
                  <Input placeholder="Weight of item" suffix="kg" />
                </Form.Item>
                {/* <Form.Item label={<Typography.Text>Tag</Typography.Text>}>
              sau nay lam tiep
            </Form.Item> */}
              </Form>
            </Col>
          </Row>
      }
    </ModalStyled>
  );
}

