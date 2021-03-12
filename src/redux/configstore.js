import { applyMiddleware, combineReducers, createStore } from "redux";
import { PhimReducer } from "./reducers/PhimReducer";
import reduxThunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";
//state tổng của ứng dụng
const rootReducers = combineReducers({
  PhimReducer: PhimReducer,
  LoadingReducer: LoadingReducer,
});

export const store = createStore(rootReducers, applyMiddleware(reduxThunk));
