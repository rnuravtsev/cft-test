import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  users: [],
  posts: [],
  comments: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_USERS:
      return extend(state, {
        users: action.payload
      });

    case ActionType.LOAD_POSTS:
      return extend(state, {
        posts: action.payload
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });

    case ActionType.ADD_COMMENT:
      return extend(state, {
        comments: [...state.comments, action.payload]
      });

    case ActionType.DELETE_COMMENT:
      return extend(state, {
        comments: state.comments.filter((comment) => comment.id !== action.payload)
      });

    case ActionType.ADD_POST:
      return extend(state, {
        posts: [action.payload, ...state.posts]
      });

    case ActionType.REMOVE_POST:
      return extend(state, {
        posts: state.posts.filter((post) => post.id !== action.payload)
      });

    default:
      return state;
  }
};

export {appData};
