import React, { useContext, useState } from "react";
import { Modal, Row, Col, Form, Input, Typography, Button, Upload } from "antd";
import { AppContext } from "../Context/AppProvider";
import styled from "styled-components";
import InputImage from "../asset/InputImage.png";
import ImgCrop from 'antd-img-crop';

const ModalStyled = styled(Modal)`
  .ant-modal-body {
    height: 70vh;
  }
`;

const { Dragger } = Upload;

export default function AddModal() {
  const { addModalVisible, setAddModalVisible } = useContext(AppContext);
  const [fileList, setFileList] = useState([]);
  const onChange = ({fileList: newFileList})=>{
    console.log(newFileList);
    setFileList(newFileList);
  };
  return (
    <ModalStyled
      width="60vw"
      height="80vh"
      closable={false}
      open={addModalVisible}
      footer={null}
      onCancel={() => {
        setAddModalVisible(false);
      }}
    >
      <Row
        style={{
          height: "75vh",
        }}
      >
        <Col span={16}>
          <ImgCrop>
            <Dragger style={{
              maxWidth: '90%',
              maxHeight: '90%',
              display:fileList.length===0?'':'none'
            }}
            customRequest={({file, onSuccess})=>{
              setTimeout(()=>{
                onSuccess("ok");
              },0)
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
                >Select from your computer</Button>
              </div>
            </Dragger>     
          </ImgCrop>
          <ImgCrop>
          <Upload
              style={{
                // display:''
              }}
              customRequest={({file, onSuccess})=>{
                setTimeout(()=>{
                  onSuccess("ok");
                },0)
              }}
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
            >
              
              {fileList.length<5 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Col>
        <Col span={8}>
          <Form layout="vertical">
            <Form.Item
              label={<Typography.Text>Type of item</Typography.Text>}
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
          </Form>
        </Col>
      </Row>
    </ModalStyled>
  );
}
