import React from "react";
import styled from "styled-components";

import LayoutSelector from "./LayoutSelector";

const StatusBar = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  & > * {
    flex: 0 1 auto;
  }
`;

export default () => (
  <StatusBar>
    <div></div>
    <LayoutSelector />
  </StatusBar>
);
