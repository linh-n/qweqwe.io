import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setTemplateText } from "../../reducer";
import { selectTemplateText } from "../../selectors";

const TextEditor = styled.textarea`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0 0 0 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent; /* thumb and track color */
  scrollbar-width: thin;
  resize: none;

  &::-webkit-scrollbar {
    width: 7.5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export default () => {
  const originalText = useSelector(selectTemplateText);
  const dispatch = useDispatch();

  return <TextEditor value={originalText} onChange={e => dispatch(setTemplateText(e.target.value))} />;
};
