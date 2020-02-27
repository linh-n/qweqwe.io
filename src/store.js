import { BehaviorSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { uiReducer, uiEpic } from "modules/ui";
import textTransformerReducer from "modules/text-transformer/reducer";

export const history = createBrowserHistory();

const routerReducer = connectRouter(history);
const rootReducer = combineReducers({
  router: routerReducer,
  ui: uiReducer,
  textTransformer: textTransformerReducer,
});

const epic$ = new BehaviorSubject(combineEpics(uiEpic));

const rootEpic = (action$, state$, dependencies) =>
  epic$.pipe(mergeMap(epic => epic(action$, state$, dependencies)));
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ajax,
    timestamp: () => Date.now(),
  },
});
const middleWares = [routerMiddleware(history), epicMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));

epicMiddleware.run(rootEpic);

export { epic$ };
export default store;
