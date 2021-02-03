import {loadPosts, loadUsers, loadComments} from "./action";

export const fetchPosts = () => (dispatch, getState, api) => (
  api.get(`/posts`)
    .then(({data}) => dispatch(loadPosts(data)))
    .then(({data}) => localStorage.setItem("posts", JSON.stringify(data)))
);

export const fetchUsers = () => (dispatch, _getState, api) => (
  api.get(`/users`)
    .then(({data}) => dispatch(loadUsers(data)))
);

export const fetchComments = () => (dispatch, _getState, api) => (
  api.get(`/comments`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const addReview = (postId, {name, email, body}) => (dispatch, _getState, api) => (
  api.post(`posts/${postId}/comments`, {name, email, body})
    .then(({data}) => console.log(data))
);
