import { BehaviorSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { uiReducer, uiEpic } from "modules/ui";
import text2bettertextReducer from "modules/text2bettertext/reducer";

export const history = createBrowserHistory();

const routerReducer = connectRouter(history);
const rootReducer = combineReducers({
  router: routerReducer,
  ui: uiReducer,
  text2bettertext: text2bettertextReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

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

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleWares)));
const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export { epic$, persistor };
export default store;
