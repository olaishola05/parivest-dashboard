import React from "react";
import Dashboard from "../../../components/layouts/UI/Dashboard";
import { Divider } from 'antd';
import { useRouter } from 'next/router'

function User(props) {
  const router = useRouter()
  console.log(router)
  return (
    <Dashboard>
      <div>
        <div>
          <h2>{props.name || 'John Joe'}</h2>
          <button>
            View profile status
          </button>
        </div>
        <hr />

        <div>
          <h3>Account Details</h3>

        </div>
        <hr />

        <div>
          <h3>Investment Profile</h3>
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider />
            <p>
              Lorem
              </p>
          </>
        </div>
      </div>
    </Dashboard>
  )
}

export default User;