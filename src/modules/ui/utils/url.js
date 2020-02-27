import getPreferredLanguage from "./preferred-language";

export const extractLanguageFromPathname = (pathname, availableLanguages) => {
  const defaultLanguage = getPreferredLanguage(availableLanguages);
  const [, languageInUrl] = pathname.split("/");
  return availableLanguages.map(l => l.key).includes(languageInUrl) ? languageInUrl : defaultLanguage;
};

export const changeLocationLanguage = (location, newLanguage) => {
  const [, , ...partsAfterLanguage] = location.pathname.split("/");
  const pathWithoutLanguage =
    (partsAfterLanguage.length > 0 ? `/${partsAfterLanguage.join("/")}` : "") + location.search;
  return `/${newLanguage}${pathWithoutLanguage}`;
};
