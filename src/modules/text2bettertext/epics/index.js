import { combineEpics } from "redux-observable";
import functionsEpic from "./functions";

export default combineEpics(functionsEpic);
