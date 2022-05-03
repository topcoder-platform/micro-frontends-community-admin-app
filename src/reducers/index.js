/**
 * Root Redux Reducer
 */
import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import authUserReducer from "../hoc/withAuthentication/reducers";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  authUser: authUserReducer,
});

export default rootReducer;
