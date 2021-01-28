import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const PostCard = (props) => {
  const {id, title, body} = props.item;
  return (
    <Card>
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
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/posts/${id}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  )
};

PostCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default PostCard;
