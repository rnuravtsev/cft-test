import {Button, Paper, Typography, TextField, TextareaAutosize, makeStyles} from "@material-ui/core";
import {nanoid} from "nanoid";

const useStyles = makeStyles((theme) => ({
  commentFormPaper: {
    position: `relative`,
    padding: `20px`,
    "&::before, &::after": {
      content: `""`,
      position: `absolute`,
      display: `block`,
      width: `15%`,
      height: `10px`,
    },
    "&::before": {
      top: 0,
      left: 0,
      backgroundColor: theme.palette.secondary.main
    },
    "&::after": {
      bottom: 0,
      right: 0,
      backgroundColor: theme.palette.primary.main
    }
  },

  commentFormTitle: {
    marginBottom: `20px`,
    textAlign: `center`,
    textTransform: `uppercase`
  },

  commentForm: {
    display: `flex`,
    flexDirection: `column`
  },

  commentFormTextArea: {
    marginBottom: theme.spacing(1)
  },

  commentFormButton: {
    display: `block`,
    margin: `16px auto`
  }
}));

const CommentForm = (props) => {
  const {onSubmit, postId} = props;
  const [comment, setComment] = React.useState({
    postId,
    name: ``,
    email: ``,
    body: ``
  });

  const classes = useStyles();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(postId, {...comment, id: nanoid(10)});
  };

  const textareaAutosizeChangeHandler = (evt) => {
    const {target} = evt;

    setComment(() => ({
      ...comment,
      body: target.value
    }));
  };

  const textFieldChangeHandler = (evt) => {
    const {target} = evt;

    setComment(() => ({
      ...comment,
      [target.name]: target.value
    }));
  };

  return (
    <Paper
      className={classes.commentFormPaper}
      elevation={3}
    >
      <Typography
        className={classes.commentFormTitle}
        variant="h4"
        component="h3"
      >
        Add comment
      </Typography>
      <form
        className={classes.commentForm}
        autoComplete="off"
        onSubmit={formSubmitHandler}
      >
        <TextField
          className={classes.commentFormTextArea}
          id="comment-name"
          name="name"
          label="Введите имя"
          required
          onChange={textFieldChangeHandler}
        />
        <TextField
          className={classes.commentFormTextArea}
          type="email"
          id="comment-email"
          name="email"
          label="Введите email"
          required
          onChange={textFieldChangeHandler}
        />
        <TextareaAutosize
          rowsMin={5}
          id="comment-text"
          placeholder="Введите комментарий"
          onChange={textareaAutosizeChangeHandler}
          required
        />
        <Button
          className={classes.commentFormButton}
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          disabled={comment.body.length < 10}
        >
          Отправить
        </Button>
      </form>
    </Paper>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  postId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default CommentForm;
