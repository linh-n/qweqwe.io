import React from "react";
import styled from "styled-components";

import LayoutSelector from "./LayoutSelector";

const StatusBarStyled = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  & > * {
    flex: 0 1 auto;
  }
`;

const StatusBar = () => (
  <StatusBarStyled>
    <div></div>
    <LayoutSelector />
  </StatusBarStyled>
);

StatusBar.whyDidYouRender = true;

export default React.memo(StatusBar);
