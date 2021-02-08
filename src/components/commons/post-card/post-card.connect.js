import {connect} from "react-redux";
import PostCard from "./post-card";
import {deletePost} from "../../../store/api-action";

const mapDispatchToProps = (dispatch) => ({
  removePost: (postId) => {
    dispatch(deletePost(postId));
  }
});

export default connect(null, mapDispatchToProps)(PostCard);
