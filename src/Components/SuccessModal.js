import React from 'react'
import { Modal, Result } from 'antd'
export default function SuccessModal({openSuccessModal,setOpenSuccessModal}) {
    return (
        <Modal
            open={openSuccessModal}
            onOk={() => setOpenSuccessModal(false)}
        >   onCancel={() => setOpenSuccessModal(false)}
            <Result
                status="success"
                title="Request sent!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            />
        </Modal>
    )
}
