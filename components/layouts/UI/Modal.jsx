import { Modal } from 'antd';
import React, { useState } from 'react';
import styles from './Dashboard.module.css'

const SelectOptions = (props) => {
  return(
    <div className={styles.selectsOpt}>
      <select name="dataview" id="dataview">
        <option value="approved">Approved</option>
        <option value="pending">Pending</option>
        <option value="review">Review</option>
      </select>
    </div>
  )
}

function ModalPopUp({ open, setOpen, routerData }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { status } = routerData.query;
    console.log(status)

    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };

    const handleCancel = () => {
      setOpen(false);
    };

    return (
      <>
        <Modal
          title="Status"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <div className={styles.selectscontainer}>
            <div>
              <span>Access</span>
              <SelectOptions />
            </div>
            <div>
              <span>Account Information</span>
              <SelectOptions />
            </div>
            <div>
              <span>Investment Profile</span>
              <SelectOptions />
            </div>

            <div>
              <span>Employment Information</span>
              <SelectOptions />
            </div>
            <div>
              <span>Bio Information</span>
              <SelectOptions />
            </div>
          </div>

        </Modal>
      </>
    );
}

export default ModalPopUp;