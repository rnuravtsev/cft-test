import {connect} from "react-redux";
import PostsList from "./posts-list";

const mapStateToProps = (state) => ({
  posts: state.DATA.posts
});

export default connect(mapStateToProps)(PostsList);
