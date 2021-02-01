export const ActionType = {
  LOAD_POSTS: `LOAD_POSTS`,
  LOAD_USERS: `LOAD_USERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  SET_APP_READY: `SET_APP_READY`
};

export const loadPosts = (posts) => ({
  type: ActionType.LOAD_POSTS,
  payload: posts
});

export const loadUsers = (users) => ({
  type: ActionType.LOAD_USERS,
  payload: users
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const setAppReady = () => ({
  type: ActionType.SET_APP_READY
});

