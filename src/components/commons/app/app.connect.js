import {connect} from "react-redux";
import App from "./app";
import {initApplication} from "./actions/initApplication";

const mapStateToProps = (state) => ({
  posts: state.DATA.posts,
  users: state.DATA.users,
  isAppReady: state.APP.isAppReady
});

const mapDispatchToProps = (dispatch) => ({
  initApplication: () => dispatch(initApplication())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
