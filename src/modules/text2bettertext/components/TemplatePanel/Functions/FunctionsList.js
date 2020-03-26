import React from "react";
import styled from "styled-components";

import Item from "../ListItem/Item";
import AddNew from "../ListItem/AddNew";

const FunctionsListStyled = styled.div`
  flex: 1;
  color: #fff;
  padding: 10px 0 0;
`;

const FunctionsList = () => (
  <FunctionsListStyled>
    <Item name="function_1"></Item>
    <Item name="function_2"></Item>
    <AddNew callBack={() => {}} />
  </FunctionsListStyled>
);

FunctionsList.whyDidYouRender = true;

export default FunctionsList;
