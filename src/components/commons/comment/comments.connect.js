import {connect} from "react-redux";
import Comments from "./comments";

const mapStateToProps = (state) => ({
  comments: state.DATA.comments
});

export default connect(mapStateToProps)(Comments);
