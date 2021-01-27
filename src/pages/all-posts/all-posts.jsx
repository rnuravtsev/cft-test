import axios from "axios";
import Header from "../../components/commons/sections/header/header";
import PostCard from "../../components/commons/post-card/post-card";
import { Grid } from "@material-ui/core";

const AllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((result) => setPosts(result.data));
  }, []);

  return (
    <>
      <Header/>
      <h2>All Posts</h2>
      <Grid container spacing={3}>
        {posts.map((el, i) => (
          <Grid key={`testItem-${i}`} item xs={3}>
            <PostCard item={el}/>
          </Grid>
          ))}
      </Grid>
    </>
  )
};

export default AllPosts;
