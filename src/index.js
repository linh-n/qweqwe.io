import "react-hot-loader";
import { hot } from "react-hot-loader/root";
import React from "react";
import WebFont from "webfontloader";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
// import ReactGA from "react-ga";

import store, { history } from "./store";

import { LanguageProvider, ThemeProvider } from "modules/ui";
import { setMessages, setAvailableLanguages } from "modules/ui/reducer";
import GlobalStyle from "modules/ui/components/GlobalStyles";

import { availableLanguages, messages } from "./i18n.config";

import Home from "pages/Home";

// ReactGA.initialize("UA-145836494-1");

store.dispatch(setAvailableLanguages(availableLanguages));
store.dispatch(setMessages(messages));
const acceptedLanguages = availableLanguages.map(l => l.key).join("|");

WebFont.load({
  google: {
    families: ["Nunito:600,900:latin-ext"],
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyle />
      <LanguageProvider>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={`/:language(${acceptedLanguages})`} component={Home} exact />
          </Switch>
        </ConnectedRouter>
      </LanguageProvider>
    </ThemeProvider>
  </Provider>
);

const HotApp = hot(App);

render(<HotApp />, document.getElementById("root"));
