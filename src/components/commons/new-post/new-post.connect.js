import {connect} from "react-redux";
import NewPost from "./new-post";
import {createPost, deletePost} from "../../../store/api-action";

const mapDispatchToProps = (dispatch) => ({
  addPost: (postData) => {
    dispatch(createPost(postData));
  },
  removePost: (postId) => {
    dispatch(deletePost(postId));
  }
});

export default connect(null, mapDispatchToProps)(NewPost);
