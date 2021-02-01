import {connect} from "react-redux";
import Posts from "./posts";

const mapStateToProps = (state) => ({
  posts: state.DATA.posts
});

export default connect(mapStateToProps)(Posts);
