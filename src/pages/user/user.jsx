import {Avatar, Grid, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Posts from "../../components/commons/posts/posts.connect";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
    "&::before": {
      content: "''",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 5
    }
  },

  userInfo: {
    position: "relative",
    marginTop: "-150px",
    zIndex: 10,
    "& a": {
      color: "#ccff00aa"
    }
  },

  userInfoBackground: {
    backgroundColor: "#734f96"
  },

  userInfoImg: {
    width: "100%",
    height: "auto",
  },

  userInfoAvatar: {
    width: "200px",
    height: "200px",
    boxShadow: "0 0 15px 5px rgb(255, 255, 255)"
  },

  userInfoName: {
    color: "whitesmoke",
  },

  userInfoLocation: {
    display: "flex",
    alignItems: "center"
  },

  userInfoText: {
    color: "whitesmoke"
  },

  userInfoIcon: {
    color: "#a69999",
    marginRight: theme.spacing(1)
  },

  userInfoWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const User = (props) => {
  const {user, comments} = props;
  const {id, username, name, email, phone, address} = user;

  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="center"
      >
        <Grid
          item
          xs={8}
          className={classes.background}
        >
          <img
            className={classes.userInfoImg}
            src={`https://wonderfulengineering.com/wp-content/uploads/2014/05/twitter-header-${id}.png`}
            srcSet={`https://wonderfulengineering.com/wp-content/uploads/2014/05/twitter-header-${id}.jpg`}
            alt="user background"
          />
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
      >
        <Grid
          item
          xs={8}
          className={classes.userInfoBackground}
        >
          <Grid
            container
            alignItems="center"
            direction="column"
          >
            <Grid item xs={6}>
              <div className={classes.userInfo}>
                <Box className={classes.userInfoWrapper}>
                  <Avatar
                    className={classes.userInfoAvatar}
                    src="https://stevensegallery.com/200/200"
                  />
                  <h2 className={classes.userInfoName}>{name}</h2>
                </Box>
                <Box m={3}>
                  <Box mb={3}>
                    <Typography className={classes.userInfoText} variant="h5" component="h3">
                      <Box fontWeight={500}>
                        @{username}
                      </Box>
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography className={classes.userInfoLocation} component="p">
                        <LocationOnIcon className={classes.userInfoIcon} fontSize="small"/>
                        <a href={`https://www.google.com/maps/place/${address.city}`}>{address.city}</a>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.userInfoLocation} component="p">
                        <MailIcon className={classes.userInfoIcon} fontSize="small"/>
                        <a href={`mailto:${email}`}>{email}</a>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.userInfoLocation} component="p">
                        <PhoneIcon className={classes.userInfoIcon} fontSize="small"/>
                        <a href={`tel:${phone}`}>{phone}</a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Posts/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};


User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf.isRequired
};

export default User;
