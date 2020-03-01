import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import { setSourceText, setLayoutIsEditing } from "../../reducer";
import { selectSourceText } from "../../selectors/inputs";

const EditorContainer = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  overflow: auto;
  resize: none;
  font-family: "Ubuntu Mono";

  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 7.5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
  }
`;

export default () => {
  const originalText = useSelector(selectSourceText);
  const dispatch = useDispatch();

  return (
    <EditorContainer>
      <Editor
        autoFocus
        padding={20}
        style={{
          minHeight: "100%",
        }}
        value={originalText}
        onValueChange={text => dispatch(setSourceText(text))}
        onBlur={() => dispatch(setLayoutIsEditing(false))}
        highlight={text => highlight(text, languages.js)}
      />
    </EditorContainer>
  );
};
