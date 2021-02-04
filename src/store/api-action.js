import {loadPosts, loadUsers, loadComments, addComment, deleteComment} from "./action";

export const fetchPosts = () => (dispatch, getState, api) => (
  api.get(`/posts`)
    .then(({data}) => dispatch(loadPosts(data)))
);

export const fetchUsers = () => (dispatch, _getState, api) => (
  api.get(`/users`)
    .then(({data}) => dispatch(loadUsers(data)))
);

export const fetchComments = () => (dispatch, _getState, api) => (
  api.get(`/comments`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const addReview = (postId, comment) => (dispatch, _getState, api) => (
  api.post(`posts/${postId}/comments`, comment)
    .then(() => dispatch(addComment(comment)))
);

export const deleteReview = (commentId) => (dispatch, _getState) => (
  dispatch(deleteComment(commentId))
  // api.delete(`posts/${postId}/comments`, commentId)
  //   .then(() => dispatch(deleteComment(commentId)))
);
