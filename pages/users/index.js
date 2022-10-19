import axios from "axios";
import Users from "../../components/layouts/UI/Users";

function UserContainer(props){
  const { dataObj } = props
  return (
    <Users users={dataObj} />
  )
}

export default UserContainer;


export async function getServerSideProps(context) {
  const response = await axios.get('https://parivest-mock-api.herokuapp.com/api/v1/users');
  const dataObj = await response.data;
  return {
    props: {
      dataObj,
    },
  };
}