import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  postTitle: {
    fontSize: `50px`,
    fontWeight: `500`,
    lineHeight: `1.4`
  },
  postDivider: {
    margin: `10px 0`,
    padding: `5px 0`
  }
});

const Post = (props) => {
  const {post} = props;
  const {id, title, body} = post;

  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
    >
      <Grid item xs={8}>
        <Typography
          // className={classes.postTitle}
          component="h1"
          variant="h2"
        >{title}</Typography>
        <Divider className={classes.postDivider}/>
        <Typography
          // className={classes.postTitle}
          component="p"
          variant="body1"
        >{body}</Typography>
      </Grid>
    </Grid>
  )
};

Post.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}).isRequired

export default Post;
