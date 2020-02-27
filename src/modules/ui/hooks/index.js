import { useContext } from "react";
import { LanguageContext } from "../components/LanguageProvider/LanguageProvider";
import { ThemeContext } from "styled-components";

import usePrevious from "./use-previous";

const useLanguage = () => useContext(LanguageContext)?.language;
const useTheme = () => useContext(ThemeContext) || {};

export { useLanguage, useTheme, usePrevious };
