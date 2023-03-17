import React from "react";
import { Modal, Result } from "antd";
import { AppContext } from "../Context/AppProvider";
export default function SuccessModal() {
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
    </Modal>
  );
}
