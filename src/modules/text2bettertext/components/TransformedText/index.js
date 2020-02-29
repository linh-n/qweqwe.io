import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectTransformedText } from "../../selectors";

const Pre = styled.pre`
  color: #fff;
  border-spacing: 0;
  border-radius: 0 0 25px 0;
  overflow: hidden;
  font-family: ${props => props.theme.fontFamily};
`;

export default () => {
  const transformedText = useSelector(selectTransformedText);
  return <Pre>{transformedText.map(l => l.value).join("\n")}</Pre>;
};
