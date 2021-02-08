import PostCard from "../post-card/post-card.connect";
import {Grid, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {postsType} from "../../../common-prop-types";
import NewPost from "../new-post/new-post.connect";

const useStyles = makeStyles({
  newPost: {
    maxWidth: `300px`
  },
  loadMoreButton: {
    display: `block`,
    margin: `0 auto`,
  }
});


const PostsList = (props) => {
  const {posts, userId} = props;
  const POSTS_COUNT = 7;
  const classes = useStyles();
  const [renderedPostsCount, setPostsCount] = React.useState(POSTS_COUNT);

  const currentUsers = posts.filter((el) => el.userId === userId);
  const postsCount = currentUsers.length;

  const renderPosts = currentUsers.slice(0, renderedPostsCount);

  return (
    <>
      <Grid container style={{padding: `20px`}} spacing={3}>
        <Grid
          className={classes.newPost}
          item
          xs
        >
          <NewPost userId={userId}/>
        </Grid>
        {
          renderPosts.map((el, i) => (
            <Grid key={`postItem-${i}`} item xs={3}>
              <PostCard post={el}/>
            </Grid>
          ))
        }
        {
          renderedPostsCount < postsCount &&
          <Grid item xs={12}>
            <Button
              className={classes.loadMoreButton}
              color="secondary"
              variant="contained"
              onClick={() => {
                setPostsCount(renderedPostsCount + POSTS_COUNT);
              }}
              size="medium"
            >
              Load more
            </Button>
          </Grid>
        }
      </Grid>
    </>
  );
};

PostsList.propTypes = {
  posts: postsType,
  userId: PropTypes.number.isRequired
};

export default PostsList;
