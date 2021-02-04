import {connect} from "react-redux";
import Comment from "./comment";
import {deleteReview} from "../../../store/api-action";

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (postId, commentId) => {
    dispatch(deleteReview(postId, commentId));
  }
});

export default connect(null, mapDispatchToProps)(Comment);
