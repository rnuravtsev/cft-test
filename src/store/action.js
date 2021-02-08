export const ActionType = {
  LOAD_POSTS: `LOAD_POSTS`,
  LOAD_USERS: `LOAD_USERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  ADD_COMMENT: `ADD_COMMENT`,
  DELETE_COMMENT: `DELETE_COMMENT`,
  ADD_POST: `ADD_POST`,
  REMOVE_POST: `REMOVE_POST`,
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

export const addComment = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: comment
});

export const deleteComment = (comment) => ({
  type: ActionType.DELETE_COMMENT,
  payload: comment
});

export const addPost = (post) => ({
  type: ActionType.ADD_POST,
  payload: post
});

export const removePost = (postId) => ({
  type: ActionType.REMOVE_POST,
  payload: postId
});

export const setAppReady = () => ({
  type: ActionType.SET_APP_READY
});

