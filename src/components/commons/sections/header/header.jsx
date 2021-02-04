import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: `flex`,
    justifyContent: ``,
    alignItems: `center`
  },
  navLink: {
    " &.active": {
      color: `white`,
      fontWeight: `bold`
    }
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
              <NavLink
                exact
                className={classes.navLink}
                to="/"
              >
                Main
              </NavLink>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <NavLink
                exact
                className={classes.navLink}
                to="/users"
              >
                Users
              </NavLink>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
