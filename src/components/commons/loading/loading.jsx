import {Backdrop, CircularProgress, Typography, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
})

const Loading = (props) => {
  const {isShow} = props;
  const classes = useStyles();

  return (
    <Backdrop open={!isShow}>
      <Box className={classes.wrapper}>
        <CircularProgress/>
        <Typography variant="h6" component="p">
          Fetching data...
        </Typography>
      </Box>
    </Backdrop>
  )
};

Loading.propTypes = {
  isShow: PropTypes.bool.isRequired
};

export default Loading;
