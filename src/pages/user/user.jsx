import {Avatar, Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    justifyContent: "center"
  },

  userInfo: {
    marginTop: "-30px"
  },

  userInfoAvatar: {
    width: "100px",
    height: "100px"
  },

  userInfoWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const User = (props) => {
  const {user} = props;
  const {id, username, name, email, phone} = user;

  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        item
        xs={12}
        className={classes.background}
      >
        <img
          src={`https://wonderfulengineering.com/wp-content/uploads/2014/05/twitter-header-${id}.png`}
          srcSet={`https://wonderfulengineering.com/wp-content/uploads/2014/05/twitter-header-${id}.jpg`}
          alt="user background"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className={classes.userInfo}>
          <Box className={classes.userInfoWrapper}>
            <Avatar
              className={classes.userInfoAvatar}
              src="https://stevensegallery.com/200/300"
            />
            <h2 className="user-info__name">{name}</h2>
          </Box>
          <p>{username}</p>
          <p>{name}</p>
        </div>
      </Grid>
    </Grid>
  )
};


User.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}).isRequired;

export default User;
