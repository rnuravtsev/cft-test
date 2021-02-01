import {extend} from "../utils/utils";
import {ActionType} from "./action";

const initialState = {
  users: [],
  posts: [],
  comments: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTS:
      return extend(state, {
        posts: action.payload
      });

    case ActionType.LOAD_USERS:
      return extend(state, {
        users: action.payload
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      })

    default:
      return state;
  }
};


