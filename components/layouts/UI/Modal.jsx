import { Button, Modal } from 'antd';
import React, { useState } from 'react';

function ModalPopUp({ open, setOpen }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };

    return (
      <>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal with async logic
        </Button> */}
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
      </>
    );
}

export default ModalPopUp;