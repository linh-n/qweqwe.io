import React from "react";
import styled from "styled-components";

import Input from "./Input";
import Functions from "./Functions/FunctionsList";
import Instruction from "../Instruction";

const TemplatePanelStyled = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const InputPanel = styled.div`
  display: flex;
  flex: 1;
`;

const ListPanel = styled.div`
  display: flex;
  flex: 0 1 auto;
  width: 250px;
  background: rgba(0, 0, 0, 0.1);
`;

const TemplatePanel = () => (
  <TemplatePanelStyled>
    <InputPanel>
      <Input />
    </InputPanel>
    <ListPanel>
      <Functions />
    </ListPanel>
    <Instruction>2. Set template</Instruction>
  </TemplatePanelStyled>
);

TemplatePanel.whyDidYouRender = true;

export default React.memo(TemplatePanel);
