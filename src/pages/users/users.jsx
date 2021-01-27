import Header from "../../components/commons/sections/header/header";
import axios from "axios";
import UserCard from "../../components/commons/user-card/user-card";
import {Grid} from "@material-ui/core";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => setUsers(result.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header/>
      <h1>Users</h1>
      <Grid container spacing={3}>
        {users.map((user, i) => (
          <Grid key={`testItem-${i}`} item xs={3}>
            <UserCard user={user}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
};

export default Users;
