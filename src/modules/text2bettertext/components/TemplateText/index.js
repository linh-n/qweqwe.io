import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-solarizedlight.css";

import { setTemplateText } from "../../reducer";
import { selectTemplateText, selectSourceText } from "../../selectors/inputs";
import { selectIsEditingSourceText } from "../../selectors/layout";

const EditorContainer = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  overflow: auto;
  resize: none;
  font-family: "Ubuntu Mono";
  transition: background-color 0.3s ease;

  &.disabled {
    background: rgba(255, 255, 255, 0.25);
  }

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

export default () => {
  const dispatch = useDispatch();
  const template = useSelector(selectTemplateText);
  const sourceText = useSelector(selectSourceText);
  const isEditingSourceText = useSelector(selectIsEditingSourceText);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(sourceText?.length === 0 || isEditingSourceText);
  }, [sourceText, isEditingSourceText]);

  return (
    <EditorContainer className={isDisabled ? "disabled" : ""}>
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
