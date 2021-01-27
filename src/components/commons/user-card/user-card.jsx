import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const UserCard = (props) => {
  const preventDefault = (evt) => evt.preventDefault();
  const {username, email} = props.user;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          {username}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link href="#" onClick={preventDefault}>
            {email}
          </Link>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Show Posts
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
