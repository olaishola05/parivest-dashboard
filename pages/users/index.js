import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/layouts/UI/Dashboard'
import axios from 'axios'
import UserTop from '../../components/layouts/UI/UserTop'
import UserTable from '../../components/layouts/UI/UserTable'

function users(props) {
  // const [data, setData] = useState({ data: [] })

  // useEffect(() => {
  //   const dataObj = props?.dataObj?.data[0]?.data;
  //   setData((prev) => ({ ...prev, data: [...dataObj] }));
  // }, [props])

  const userData = props?.dataObj?.data[0]?.data?.map((i, index) => {
    return { ...i, key: index };
  });
  return (
    <Dashboard>
      <UserTop />
      <UserTable userData={userData}/>
    </Dashboard>
  )
}

export default users


export async function getServerSideProps(context) {
  const response = await axios.get('https://parivest-mock-api.herokuapp.com/api/v1/users');
  const dataObj = await response.data;
  return {
    props: {
      dataObj,
    },
  };
}