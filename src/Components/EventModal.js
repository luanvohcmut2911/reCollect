import React, { useContext, useState } from "react";
import { Modal, Form, Input, Typography, Button, Upload, notification } from "antd";
import { AppContext } from "../Context/AppProvider";
import styled from "styled-components";
import InputImage from "../asset/InputImage.png";
import ImgCrop from "antd-img-crop";
import { addDocument } from "../Firebase/services";
import { getImageURL } from "../Firebase/getImageURL";
import GoogleMapsBox from "../apis/googleMapsAPI/GoogleMaps";

const ModalStyled = styled(Modal)`
  .ant-modal-body {
    height: 100%;
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
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message: 'Event is added successfully'
    })
  }
  const currentUserUid = JSON.parse(localStorage.getItem("data"))?.uid;
  const { eventModalVisible, setEventModalVisible, center } = useContext(AppContext);
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onFinish = (values) => {
    setEventModalVisible(false);
    const imageURL = getImageURL(fileList);
    openNotification();
    imageURL.then((data) => {
      addDocument("events", {
        ...values,
        imageList: data,
        location: center,
        itemOwner: currentUserUid,
      }).then(() => {
        window.location.reload(false);
      });
    });
  };
  return (
    <ModalStyled
      width="50vw"
      height="50vh"
      closable={false}
      open={eventModalVisible}
      footer={null}
      onCancel={() => {
        setEventModalVisible(false);
      }}
    >
      {contextHolder}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
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
          style={{
            alignSelf: "right",
          }}
        >
          <Form.Item
            label={<Typography.Text>Title of event</Typography.Text>}
            rules={[{ required: true, message: "Please title for event..." }]}
            name="eventTitle"
          >
            <Input placeholder="Type of item ..." />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Text>Description for your event</Typography.Text>
            }
            rules={[
              { required: true, message: "Please description for event..." },
            ]}
            name="eventDescription"
          >
            <Input.TextArea placeholder="Description ..." />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Text>List of necessary item </Typography.Text>
            }
            rules={[
              { required: true, message: "Please enter list of items for event..." },
            ]}
            name="eventItems"
          >
            <Input.TextArea placeholder="Separate with (,) ..." />
          </Form.Item>
          <Form.Item>
            <GoogleMapsBox />
            {console.log(center)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </ModalStyled>
  );
}

// chua xong submit
