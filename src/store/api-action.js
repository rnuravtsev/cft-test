import {loadPosts, loadUsers} from "./action";

export const fetchPosts = () => (dispatch, getState, api) => (
  api.get(`/posts`)
    .then(({data}) => dispatch(loadPosts(data)))
);

export const fetchUsers = () => (dispatch, _getState, api) => (
  api.get(`/users`)
    .then(({data}) => dispatch(loadUsers(data)))
);
