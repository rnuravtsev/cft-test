import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: `flex`,
    justifyContent: ``,
    alignItems: `center`
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
        <Toolbar className={classes.root}>
         <Grid container spacing={3}>
          <Grid item>
            <Typography>
              Main
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link to="/posts">Posts</Link>
            </Typography>
          </Grid>
           <Grid item>
             <Typography>
               <Link to="/users">Users</Link>
             </Typography>
           </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
