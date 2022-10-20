import React from 'react'
import { Space, Table} from "antd";
import "antd/dist/antd.css";
import dayjs from "dayjs";
import { useRouter } from 'next/router'
import styles from './Dashboard.module.css'

function UserTable({ userData = []}) {
  const router = useRouter()
  const { Column } = Table;

  return (
    <div className={styles.users}>
      <Table dataSource={userData}>
        <Column
          title="Date Joined"
          dataIndex="createdAt"
          key="1"
          className=""
          render={(text) => {
            return (
              <>
                <span>{dayjs(text).format("DD-MM-YYYY")} </span>
              </>
            );
          }}
        />
        <Column
          title="User ID"
          dataIndex="client_id"
          key="2"
          className=""
        />
        <Column
          title="Name"
          dataIndex="name"
          key="3"
          className=""
          render={(text, record) => {
            return (
              <>
                <span className="pr-1">
                  {record.first_name} {record.last_name}
                </span>
              </>
            );
          }}
        />
        <Column
          title="Email Address"
          dataIndex="email"
          key="4"
          className=""
        />
        <Column
          title="Phone No"
          dataIndex="phone"
          key="5"
          className=""
        />
        <Column
          title="Status"
          dataIndex="status"
          key="6"
          className=""
          render={(text) => {
            return (
              <>
                <span className="pr-1">
                  {text.access}
                </span>
              </>
            );
          }}
        />
        <Column
          title="Action"
          dataIndex="action"
          key="7"
          className={styles.view}
          render={(text, record) => {
            const id = record._id
            return (
              <>
                <Space size="middle">
                  <span className="pr-1" onClick={() => router.push({
                    pathname: `/users/${id}`,
                    query: { client_id: record.client_id, first_name: record.first_name, last_name: record.last_name, email: record.email, phone: record.phone, status: record.status },
                  })} style={{ cursor: 'pointer' }}>
                    view
                  </span>
                </Space>
              </>
            );
          }}
        />
      </Table>
    </div>
  )
}

export default UserTable