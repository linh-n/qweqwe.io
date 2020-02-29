import React from "react";
import styled from "styled-components";

import OriginalText from "./OriginalText";
import Table from "./Table";

const TextTransformer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;

export default () => (
  <TextTransformer>
    <OriginalText />
    <Table />
  </TextTransformer>
);
