import React from "react";
import styled from "styled-components";

import OriginalText from "./OriginalText";
import TemplateText from "./TemplateText";
import Table from "./Table";
import TransformedText from "./TransformedText";

const TextTransformer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 49.5% 49.5%;
  grid-template-rows: 49.5% 49.5%;
  grid-gap: 1%;
`;

export default () => (
  <TextTransformer>
    <OriginalText />
    <Table />
    <TemplateText />
    <TransformedText />
  </TextTransformer>
);
