import { mergeMap } from "rxjs/operators";
import { push } from "connected-react-router";
import { ofType } from "redux-observable";
import { changeLocationLanguage } from "../utils/url";
import { setLanguage } from "../reducer";

export default (action$, state$) =>
  action$.pipe(
    ofType(setLanguage),
    mergeMap(action => {
      const currentLocation = state$.value.router.location;
      const newLocation = changeLocationLanguage(currentLocation, action.payload);

      if (newLocation !== currentLocation.pathname) {
        return [push(newLocation)];
      }

      return [];
    })
  );
