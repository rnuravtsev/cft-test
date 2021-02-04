import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  userCardWrapper: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginBottom: theme.spacing(2)
  },

  userCardName: {
    textDecoration: `none`
  },

  userCardAvatar: {
    width: `60px`,
    height: `60px`
  },

  userCardButton: {
    color: `ghostwhite`
  },

  userCardInfo: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `end`
  },

  userCardLocation: {
    display: `flex`,
    alignItems: `initial`
  }
}));


const UserCard = (props) => {
  const classes = useStyles();
  const {id, username, address} = props.user;
  const {city} = address;

  return (
    <Card>
      <CardContent>
        <Box className={classes.userCardWrapper}>
          <Link to={`users/${id}`}>
            <Avatar
              variant="circular"
              className={classes.userCardAvatar}
              src="https://stevensegallery.com/80/80"
            />
          </Link>
          <Box
            className={classes.userCardInfo}
          >
            <Typography
              variant="subtitle1" component="h3">
              <Link className={classes.userCardName} to={`users/${id}`}>{username}</Link>
            </Typography>
            <Typography
              className={classes.userCardLocation}
              variant="subtitle1" component="p">
              <LocationOnIcon/> {city}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/users/${id}`} className={classes.userCardButton} fullWidth variant="contained" size="small" color="primary">More</Button>
      </CardActions>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    address: PropTypes.arrayOf(PropTypes.shape({
      city: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

export default UserCard;
