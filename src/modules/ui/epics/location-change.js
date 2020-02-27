import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { LOCATION_CHANGE } from "connected-react-router";
import { ofType } from "redux-observable";
import ReactGA from "react-ga";
import { extractLanguageFromPathname } from "../utils/url";
import { setLanguage } from "../reducer";

export default (action$, state$) =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    mergeMap(action => {
      const environment = process.env.NODE_ENV || "development";
      if (environment === "production") {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }

      const languageInUrl = extractLanguageFromPathname(
        action.payload.location.pathname,
        state$.value.ui.availableLanguages
      );
      const currentLanguage = state$.value.ui.language;

      if (!currentLanguage || currentLanguage !== languageInUrl) {
        return of(setLanguage(languageInUrl));
      }

      return [];
    })
  );
