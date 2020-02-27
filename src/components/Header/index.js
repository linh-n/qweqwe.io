import React from "react";
import styled from "styled-components";

import Container from "shared-components/Container";
import Logo from "./Logo";

const Header = styled.div`
  padding: 10px 0;
  flex: 0 0 auto;
`;

export default () => (
  <Container>
    <Header>
      <Logo />
    </Header>
  </Container>
);
