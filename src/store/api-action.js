import {loadPosts, loadUsers, loadComments, addComment, deleteComment, addPost, removePost} from "./action";

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

export const deleteReview = (commentId) => (dispatch) => (
  dispatch(deleteComment(commentId))
  // api.delete(`posts/${postId}/comments`, commentId)
  //   .then(() => dispatch(deleteComment(commentId)))
);

export const createPost = (postData) => (dispatch, _getState, api) => (
  api.post(`posts/`)
    .then(() => dispatch(addPost(postData)))
);

export const deletePost = (postId) => (dispatch, _getState, api) => (
  api.delete(`/posts/${postId}`)
    .then(() => dispatch(removePost(postId)))
);
