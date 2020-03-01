import "react-hot-loader";
import { hot } from "react-hot-loader/root";
import React from "react";
import WebFont from "webfontloader";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
// import ReactGA from "react-ga";

import store, { history, persistor } from "./store";

import { LanguageProvider, ThemeProvider } from "modules/ui";
import { setMessages, setAvailableLanguages } from "modules/ui/reducer";
import GlobalStyle from "modules/ui/components/GlobalStyles";

import { availableLanguages, messages } from "./i18n.config";

import App from "./App";

// ReactGA.initialize("UA-145836494-1");

store.dispatch(setAvailableLanguages(availableLanguages));
store.dispatch(setMessages(messages));

WebFont.load({
  google: {
    families: ["Nunito:600,900:latin-ext", "Ubuntu+Mono:400,700:latin-ext"],
  },
});

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <GlobalStyle />
        <LanguageProvider>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </LanguageProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

const HotRot = hot(Root);

render(<HotRot />, document.getElementById("root"));
