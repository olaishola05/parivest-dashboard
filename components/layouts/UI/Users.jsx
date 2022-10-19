import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import UserTop from './UserTop'
import UserTable from './UserTable'

function Users(props) {
  const [data, setData] = useState({ data: [] })

  useEffect(() => {
    const dataObj = props?.users?.data[0]?.data;
    setData((prev) => ({ ...prev, data: [...dataObj] }));
  }, [props])

  const userData = data?.data?.map((i, index) => {
    return { ...i, key: index };
  });
  return (
    <Dashboard>
      <UserTop />
      <UserTable userData={userData} />
    </Dashboard>
  )
}

export default Users