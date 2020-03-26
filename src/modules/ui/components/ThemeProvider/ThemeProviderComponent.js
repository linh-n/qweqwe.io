import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
  containerWidth: 1100,
  containerPadding: 25,
  colorBackground: "#3E75B0",
  colorLightBackground: "#f5f6f7",
  colorAccent: "#4CAF4F",
  colorHighlight: "#781a36",
  colorDisabled: "#666666",
  fontFamily: "Nunito, Arial, sans-serif",
  fontFamilyMono: "'Ubuntu Mono', Courier, monospace",
  fontSize: "18px",
  fontWeightNormal: 600,
  fontWeightBold: 900,
  mobileTheme: {
    containerPadding: 15,
    fontSize: "12px",
  },
};

const CustomThemeProvider = ({ children, theme }) => (
  <div style={{ position: "relative" }}>
    <ThemeProvider
      theme={{
        ...defaultTheme,
        ...theme,
      }}
    >
      {children}
    </ThemeProvider>
  </div>
);

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

CustomThemeProvider.defaultProps = {
  children: null,
  theme: {
    mobileTheme: {},
  },
};

export default CustomThemeProvider;
