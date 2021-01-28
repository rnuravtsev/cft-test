import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  isAppReady: false
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APP_READY:
      return extend(state, {
        isAppReady: true
      });

    default:
      return state
  }
};

export {appProcess};
