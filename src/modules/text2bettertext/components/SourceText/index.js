import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import { setSourceText } from "../../reducer";
import { selectSourceText } from "../../selectors/inputs";

const TextEditor = styled(Editor)`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  resize: none;
`;

export default () => {
  const originalText = useSelector(selectSourceText);
  const dispatch = useDispatch();

  return (
    <TextEditor
      value={originalText}
      onValueChange={text => dispatch(setSourceText(text))}
      highlight={text => highlight(text, languages.js)}
    />
  );
};
