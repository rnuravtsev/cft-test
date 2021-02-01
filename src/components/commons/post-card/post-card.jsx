import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  postCard: {
    height: `100%`,
    display: "flex",
    flexDirection: "column"
  },
  postCardActions: {
    marginTop: `auto`
  }
});

const PostCard = (props) => {
  const {id, title, body} = props.post;
  const classes = useStyles();

  return (
    <Card className={classes.postCard}>
      <CardActionArea>
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
      </CardActions>
    </Card>
  )
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default PostCard;
