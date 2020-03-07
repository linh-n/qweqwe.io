import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const HeaderStyled = styled.div`
  padding: 10px ${props => props.theme.containerPadding}px;
  flex: 0 0 auto;
`;

const Header = () => (
  <HeaderStyled>
    <Logo />
  </HeaderStyled>
);

Header.whyDidYouRender = true;

export default Header;
