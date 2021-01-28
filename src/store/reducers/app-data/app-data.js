import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  users: [],
  posts: []
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
      })

    default:
      return state
  }
};

export {appData};
