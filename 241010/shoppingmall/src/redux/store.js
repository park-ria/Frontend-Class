import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers";

//const store = createStore(productReducer, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
