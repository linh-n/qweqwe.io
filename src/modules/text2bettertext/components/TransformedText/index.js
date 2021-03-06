import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectTransformedText } from "../../selectors/transform";

const Transformed = styled.div`
  background: rgba(0, 0, 0, 0.15);
  flex: 1 1 auto;
  position: relative;

  pre {
    margin: 0;
    padding: 15px ${props => props.theme.containerPadding}px;
    color: #fff;
    font-family: ${props => props.theme.fontFamilyMono};
  }
`;

export default () => {
  const transformedText = useSelector(selectTransformedText);
  return (
    <Transformed>
      <pre>{transformedText.join("\n")}</pre>
    </Transformed>
  );
};
