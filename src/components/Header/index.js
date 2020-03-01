import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const Header = styled.div`
  padding: 10px 25px;
  flex: 0 0 auto;
`;

export default () => (
  <Header>
    <Logo />
  </Header>
);
