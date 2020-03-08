import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-solarizedlight.css";

import { setTemplateText } from "../../../reducer";
import { selectTemplateText } from "../../../selectors/inputs";
import { selectShouldShowSourceInput } from "../../../selectors/layout";

const EditorContainer = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.6);
  overflow: auto;
  resize: none;
  font-family: ${props => props.theme.fontFamilyMono};
  transition: background-color 0.3s ease;

  &.faded {
    background: rgba(255, 255, 255, 0.45);
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

const TemplateInput = () => {
  const dispatch = useDispatch();
  const template = useSelector(selectTemplateText);
  const faded = useSelector(selectShouldShowSourceInput);

  return (
    <EditorContainer className={faded ? "faded" : ""}>
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

TemplateInput.whyDidYouRender = true;

export default React.memo(TemplateInput);
