import axios from "axios";
import Header from "../../components/commons/sections/header/header";
import PostCard from "../../components/commons/post-card/post-card";
import { Grid } from "@material-ui/core";

const Posts = (props) => {
  const {posts} = props;

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

export default Posts;
