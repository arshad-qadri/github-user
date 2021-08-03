import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRducer from "./Reducers";

const store = createStore(
  rootRducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
