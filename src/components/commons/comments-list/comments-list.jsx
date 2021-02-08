import {Fragment} from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CommentForm from "../comment-form/comment-form.connect";
import Comment from "../comment/comment.connect";
import {List} from "@material-ui/core";
import {commentsType} from "../../../common-prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: `100%`,
    backgroundColor: theme.palette.background.paper
  }
}));

const CommentsList = (props) => {
  const {comments, postId} = props;
  const classes = useStyles();

  const currentComments = comments.filter((comment) => comment.postId === +(postId) || comment.postId === postId);

  return (
    <>
      <Box my={3}>
        <CommentForm postId={postId}/>
      </Box>
      <List className={classes.root}>
        {currentComments.map((comment) => (
          <Fragment key={comment.id}>
            <Comment comment={comment}/>
          </Fragment>
        ))}
      </List>
    </>
  );
};

CommentsList.propTypes = {
  comments: commentsType,
  postId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default CommentsList;
