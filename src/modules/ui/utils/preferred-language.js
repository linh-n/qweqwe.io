const getPreferredLanguage = availableLanguages => {
  const availableLanguagesKeys = availableLanguages.map(l => l.key);

  let locale = (
    (navigator.languages
      ? navigator.languages[0]
      : window.navigator.userLanguage || window.navigator.language) || availableLanguagesKeys[0]
  ).toLowerCase();

  if (!availableLanguagesKeys.includes(locale)) {
    locale = locale.substr(2);
  }

  if (!availableLanguagesKeys.includes(locale)) {
    [locale] = availableLanguagesKeys;
  }
  return locale;
};

export default getPreferredLanguage;
