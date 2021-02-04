import Header from "../../components/commons/sections/header/header";
import UserCard from "../../components/commons/user-card/user-card";
import {Grid} from "@material-ui/core";
import {usersType} from "../../commonPropTypes";

const Users = (props) => {
  const {users} = props;

  return (
    <>
      <Header/>
      <h1>Users</h1>
      <Grid container spacing={3}>
        {users.map((user, i) => (
          <Grid key={`testItem-${i}`} item xs={2}>
            <UserCard user={user}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Users.propTypes = {
  users: usersType
};

export default Users;
