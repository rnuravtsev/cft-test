import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  postCard: {
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  postCardActions: {
    marginTop: `auto`,
    justifyContent: `space-between`
  },
  postCardDeleteButton: {
    color: theme.palette.error.main
  }
}));

const PostCard = (props) => {
  const {post, removePost} = props;
  const {id, title, body} = post;
  const classes = useStyles();

  return (
    <Card className={classes.postCard}>
      <CardActionArea component={Link} to={`/posts/${id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.postCardActions}>
        <Button size="small" color="primary">
          <Link to={`/posts/${id}`}>Learn More</Link>
        </Button>
        <Button
          className={classes.postCardDeleteButton}
          onClick={() => removePost(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),
  removePost: PropTypes.func.isRequired
};

export default PostCard;
