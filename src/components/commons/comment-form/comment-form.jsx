import {Button, Paper, Typography, TextField, makeStyles} from "@material-ui/core";
import {nanoid} from "nanoid";


const Comment = {
  NAME_MIN_LENGTH: 1,
  EMAIL_MIN_LENGTH: 5,
  BODY_MIN_LENGTH: 3
};

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
  },

  commentFormButtonError: {
    backgroundColor: theme.palette.success.main
  },

  commentFormButtonSuccess: {
    backgroundColor: theme.palette.success.main
  },

  hidden: {
    display: `none`
  }
}));

const CommentForm = (props) => {
  const {onSubmit, postId} = props;
  const initialStateComment = {
    postId,
    name: ``,
    email: ``,
    body: ``
  };

  const [comment, setComment] = React.useState(initialStateComment);
  const [isFormValid, setFormValid] = React.useState(false);

  const classes = useStyles();

  const checkForm = () => {
    const checkEmail = () => {
      const pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      return pattern.test(comment.email) && (comment.email.length > Comment.EMAIL_MIN_LENGTH);
    };
    const checkBody = () => comment.body.length > Comment.BODY_MIN_LENGTH;
    const checkName = () => comment.name.length > Comment.NAME_MIN_LENGTH;
    return checkEmail() && checkBody() && checkName() ? setFormValid(true) : setFormValid(false);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(postId, {...comment, id: nanoid(10)});
    setComment(initialStateComment);
    setFormValid(false);
    evt.target.reset();
  };

  const onInputChange = (evt) => {
    const {target: {name, value}} = evt;
    setComment({
      ...comment,
      [name]: value
    });
    checkForm();
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
        onSubmit={onFormSubmit}
      >
        <TextField
          id="comment-name"
          name="name"
          label="Введите имя"
          required
          onChange={onInputChange}
          margin="dense"
        />
        <TextField
          type="email"
          id="comment-email"
          name="email"
          label="Введите адрес электронной почты"
          required
          margin="dense"
          onChange={onInputChange}
        />
        <TextField
          multiline
          rows={2}
          id="comment-body"
          name="body"
          placeholder="Введите комментарий"
          onChange={onInputChange}
          helperText={
            <span className={isFormValid ? classes.hidden : null}>Вспомогающее сообщение</span>
          }
          required
        />
        <Button
          className={classes.commentFormButton}
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          disabled={!isFormValid}
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
