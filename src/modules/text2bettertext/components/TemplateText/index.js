import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-solarizedlight.css";

import { setTemplateText } from "../../reducer";
import { selectTemplateText } from "../../selectors/inputs";

const EditorContainer = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
  scrollbar-width: thin;
  overflow: auto;
  resize: none;

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
  const template = useSelector(selectTemplateText);
  const dispatch = useDispatch();

  return (
    <EditorContainer>
      <Editor
        padding={20}
        style={{
          minHeight: "100%",
        }}
        value={template}
        onValueChange={text => dispatch(setTemplateText(text))}
        highlight={text => highlight(text, languages.json)}
      />
    </EditorContainer>
  );
};
