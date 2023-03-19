import React from "react";
import { Modal, Result, Button } from "antd";
import { AppContext } from "../Context/AppProvider";
import { useNavigate } from "react-router-dom";
export default function SuccessModal({ userFacebook }) {
  const navigate = useNavigate();
  const { openSuccessModal, setOpenSuccessModal } =
    React.useContext(AppContext);
  return (
    <Modal
      open={openSuccessModal}
      onCancel={() => {
        setOpenSuccessModal(false);
      }}
      footer={null}
    >
      <Result
        status="success"
        title="Request sent!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
      <a href={userFacebook} target='blank' style={{
        alignContent: "center"
      }}  type="primary"> Chat now </a>
    </Modal>
  );
}
