import {connect} from "react-redux";
import User from "./user";

const mapStateToProps = (state) => ({
  comments: state.DATA.comments
});

export default connect(mapStateToProps)(User);
