import {connect} from "react-redux";
import CommentForm from "./comment-form";
import {addReview} from "../../../store/api-action";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (id, commentData) => {
    dispatch(addReview(id, commentData));
  }
});

export default connect(null, mapDispatchToProps)(CommentForm);
