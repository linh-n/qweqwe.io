import { combineEpics } from "redux-observable";

import locationChangeEpic from "./location-change";
import setLanguageEpic from "./set-language";

export default combineEpics(locationChangeEpic, setLanguageEpic);
