import {Grid, Paper, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import {nanoid} from "nanoid";

const useStyles = makeStyles((theme) => ({
  postPaper: {
    padding: theme.spacing(2),
    height: `100%`,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 15px 5px rgb(255, 255, 255)`
  },

  postTitle: {
    textAlign: `center`,
    color: theme.palette.secondary.main,
    textTransform: `uppercase`
  },

  postForm: {
    display: `flex`,
    flexDirection: `column`
  },
  postInput: {
    color: theme.palette.secondary.main
  },
  postOutlinedInput: {
    "& fieldset": {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  }
}));

const NewPost = (props) => {
  const {userId, addPost} = props;
  const [postData, setPostData] = React.useState({
    title: ``,
    body: ``,
    userId
  });

  const classes = useStyles();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    addPost({...postData, id: nanoid(10)});
  };

  const onInputChange = (evt) => {
    const {target} = evt;
    setPostData(() => ({
      ...postData,
      [target.name]: target.value
    }));
  };

  return (
    <Paper
      className={classes.postPaper}
      elevation={3}
    >
      <Typography
        className={classes.postTitle}
        variant="h6"
        component="h3"
      >
        Add new post
      </Typography>
      <form className={classes.postForm} onSubmit={onFormSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              className={classes.postOutlinedInput}
              id="post-title"
              name="title"
              label="Заголовок"
              margin="normal"
              color="secondary"
              fullWidth
              variant="outlined"
              required
              inputProps={{
                className: classes.postInput
              }}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={`${classes.postInput} ${classes.postOutlinedInput}`}
              id="post-body"
              name="body"
              rows={3}
              color="secondary"
              placeholder="Что у вас нового?"
              multiline
              fullWidth
              variant="outlined"
              required
              inputProps={{
                className: classes.postInput
              }}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              startIcon={<AddIcon/>}
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

NewPost.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  addPost: PropTypes.func.isRequired,
  removePost: PropTypes.func
};

export default NewPost;
