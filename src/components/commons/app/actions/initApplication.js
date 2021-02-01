import {fetchComments, fetchPosts, fetchUsers} from "../../../../store/api-action";
import {setAppReady} from "../../../../store/action";

export const initApplication = () => (dispatch) => {
  Promise.all([
    dispatch(fetchPosts()),
    dispatch(fetchUsers()),
    dispatch(fetchComments())
  ])
    .then(() => (
      dispatch(setAppReady())
    ));
}
