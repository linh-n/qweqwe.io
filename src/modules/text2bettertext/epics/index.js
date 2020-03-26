import { combineEpics } from "redux-observable";
import saveFunctionEpic from "./save-function";

export default combineEpics(saveFunctionEpic);
