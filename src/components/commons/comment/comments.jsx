import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CommentForm from "../comment-form/comment-form.connect";

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

const Comments = (props) => {
  const {comments, postId} = props;
  const classes = useStyles();

  const currentComments = comments.filter((comment) => comment.postId === postId);

  return (
    <>
      <Box my={3}>
        <CommentForm postId={postId}/>
      </Box>
      <List className={classes.root}>
        {currentComments.map(comment => {
          return (
            <React.Fragment key={comment.id}>
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="avatar" src={`https://www.placecage.com/40/40`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.fonts}>
                      {comment.name}
                    </Typography>
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
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default Comments;
