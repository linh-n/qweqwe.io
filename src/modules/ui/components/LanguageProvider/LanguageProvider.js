import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

export const LanguageContext = React.createContext({ language: "en" });

const LangProvider = ({ children, language, messages }) => (
  <LanguageContext.Provider value={{ language: language }}>
    <IntlProvider key={language} locale={language} messages={messages}>
      <>{children}</>
    </IntlProvider>
  </LanguageContext.Provider>
);

LangProvider.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
  messages: PropTypes.object,
};

LangProvider.defaultProps = {
  children: undefined,
  language: "en",
  messages: undefined,
};

export default LangProvider;
