import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography, Button, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  fonts: {
    fontWeight: `bold`
  },
  inline: {
    display: `inline`
  },
  commentWrapper: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `normal`
  }
});

const Comment = (props) => {
  const {comment, deleteReview} = props;
  const classes = useStyles();

  return (
    <>
      <ListItem key={comment.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" src={`https://www.placecage.com/40/40`}/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box className={classes.commentWrapper}>
              <Typography className={classes.fonts}>
                {comment.name}
              </Typography>
              <Button
                color="primary"
                onClick={() => deleteReview(comment.id)}
              >
                delete
              </Button>
            </Box>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {comment.email}
              </Typography>
              {` - ${comment.body}`}
            </>
          }
        />
      </ListItem>
      <Divider/>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired,
  deleteReview: PropTypes.func.isRequired,
};

export default Comment;
