import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': `antialiased`,
        '-moz-osx-font-smoothing': `grayscale`,
        height: `100%`,
        width: `100%`
      },
      '*, *::before, *::after': {
        boxSizing: `inherit`
      },
      body: {
        height: `100%`,
        width: `100%`,
        backgroundColor: theme.palette.primary.light
      },
      '#root': {
        height: `100%`,
        width: `100%`
      }
    }
  }));

const GlobalStyles = () => {
  useStyles();

  return null;
};

// eslint-disable-next-line new-cap
export default GlobalStyles;
