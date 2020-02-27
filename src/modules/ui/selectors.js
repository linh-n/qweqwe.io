import { createSelector } from "reselect";

const getCurrentLanguage = state => state.ui.language;
const getMessages = state => state.ui.messages;
const getAvailableLanguages = state => state.ui.availableLanguages;
const getErrors = state => state.ui.errors;

export const selectCurrentLanguage = createSelector(
  getCurrentLanguage,
  language => language
);
export const selectCurrentLocale = createSelector(
  getCurrentLanguage,
  getAvailableLanguages,
  (language, allLanguages) => allLanguages.find(l => l.key === language).locale
);
export const selectCurrentLanguageMessages = createSelector(
  [getCurrentLanguage, getMessages],
  (language, messages) => messages[language]
);
export const selectAvailableLanguages = createSelector(
  getAvailableLanguages,
  languages => languages
);
export const isRtl = createSelector(
  getCurrentLanguage,
  language => language === "ar"
);
export const selectErrors = createSelector(
  getErrors,
  errors => errors
);
