import { combineReducers } from "redux";
import userRed from "./userAndRepoData";

const rootRducer = combineReducers({ userRed });

export default rootRducer;
