import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import { setSourceText, setLayoutIsEditingSource } from "../../reducer";
import { selectSourceText } from "../../selectors/inputs";

const EditorContainer = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  overflow: auto;
  resize: none;
  font-family: ${props => props.theme.fontFamilyMono};

  scrollbar-color: rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.15);
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 7.5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.15);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const Input = () => {
  const sourceText = useSelector(selectSourceText);
  const dispatch = useDispatch();

  const onBlur = () => dispatch(setLayoutIsEditingSource(false));
  const onValueChange = text => dispatch(setSourceText(text));
  const highlightFn = text => highlight(text, languages.js);

  return (
    <EditorContainer>
      <Editor
        autoFocus
        insertSpaces={false}
        tabSize={1}
        padding={20}
        style={{
          minHeight: "100%",
        }}
        onBlur={onBlur}
        value={sourceText}
        onValueChange={onValueChange}
        highlight={highlightFn}
      />
    </EditorContainer>
  );
};

Input.whyDidYouRender = true;

export default Input;
