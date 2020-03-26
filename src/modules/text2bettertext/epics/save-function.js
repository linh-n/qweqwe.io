import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { saveFunction, setFunction } from "../reducer";

import extractFunctionName from "../utilities/function-extract-name";

export default action$ =>
  action$.pipe(
    ofType(saveFunction),
    mergeMap(({ payload }) => {
      const functionName = extractFunctionName(payload);
      return setFunction({ name: functionName, functionStr: payload });
    })
  );
