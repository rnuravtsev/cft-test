import PostCard from "../post-card/post-card";
import {Grid, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStlyes = makeStyles({
  loadMoreButton: {
    margin: `0 auto`,
    display: `block`,
    backgroundColor: `white`,
  }
});


const Posts = (props) => {
  const {posts} = props;
  const classes = useStlyes();
  const postsCount = posts.length;
  const POSTS_COUNT = 8;
  const [renderedPostsCount, setPostsCount] = React.useState(POSTS_COUNT);

  const renderPosts = posts.slice(0, renderedPostsCount);

  return (
    <>
      <Grid container style={{padding: `20px`}} spacing={3}>
        {renderPosts.map((el, i) => (
          <Grid key={`postItem-${i}`} item xs={3}>
            <PostCard post={el}/>
          </Grid>
          ))}
        {renderedPostsCount < postsCount &&
        <Grid item xs={12}>
          <Button
            className={classes.loadMoreButton}
            onClick={() => {setPostsCount(renderedPostsCount + POSTS_COUNT)}}
            size="medium"
          >
            Load more
          </Button>
        </Grid>}

      </Grid>
    </>
  )
};

export default Posts;
