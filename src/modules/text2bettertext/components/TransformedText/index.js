import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectTransformedText } from "../../selectors/transform";

const TransformedStyled = styled.div`
  background: rgba(0, 0, 0, 0.15);
  flex: 1 1 auto;

  pre {
    margin: 0;
    padding: 15px ${props => props.theme.containerPadding}px;
    color: #fff;
    font-family: "Ubuntu Mono";
  }
`;

const TransformedText = () => {
  const transformedText = useSelector(selectTransformedText);
  return (
    <TransformedStyled>
      <pre>{transformedText.map(l => l.value).join("\n")}</pre>
    </TransformedStyled>
  );
};

export default TransformedText;
