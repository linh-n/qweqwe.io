import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import useResizeAware from "react-resize-aware";

const defaultTheme = {
  containerWidth: 1100,
  containerPadding: 40,
  colorBackground: "#3E75B0",
  colorLightBackground: "#f5f6f7",
  colorAccent: "#4CAF4F",
  colorHighlight: "#781a36",
  colorDisabled: "#666666",
  fontFamily: "Ubuntu Mono",
  fontSize: "18px",
  fontWeightNormal: 600,
  fontWeightBold: 900,
  mobileTheme: {
    containerPadding: 20,
    fontSize: "12px",
  },
};

const CustomThemeProvider = ({ children, theme }) => {
  const [resizeListener, size] = useResizeAware();
  return (
    <div style={{ position: "relative" }}>
      {resizeListener}
      <ThemeProvider
        theme={
          size.width > 800
            ? {
                ...defaultTheme,
                ...theme,
              }
            : {
                ...defaultTheme,
                ...theme,
                ...defaultTheme.mobileTheme,
                ...theme.mobileTheme,
              }
        }
      >
        {children}
      </ThemeProvider>
    </div>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

CustomThemeProvider.defaultProps = {
  children: null,
  theme: {},
};

export default CustomThemeProvider;
