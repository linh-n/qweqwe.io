import React from "react";
import styled from "styled-components";

import OriginalText from "./OriginalText";

const TextTransformer = styled.div`
  flex-grow: 1;
`;

export default () => (
  <TextTransformer>
    <OriginalText />
  </TextTransformer>
);
