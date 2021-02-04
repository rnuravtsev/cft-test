import {connect} from "react-redux";
import CommentsList from "./comments-list";

const mapStateToProps = (state) => ({
  comments: state.DATA.comments
});

export default connect(mapStateToProps)(CommentsList);
