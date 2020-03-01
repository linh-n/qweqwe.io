import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { HotKeys, configure } from "react-hotkeys";

import { setSourceText, setLayoutIsEditing } from "../../reducer";
import { selectSourceText } from "../../selectors/inputs";

configure({
  ignoreEventsCondition: () => false,
});

const TextEditor = styled.textarea`
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

  const keyMap = {
    ctrl_s: "ctrl+s",
  };

  const handlers = {
    ctrl_s: useCallback(event => {
      event.preventDefault();
      dispatch(setLayoutIsEditing(false));
    }, []),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers} style={{ width: "100%", height: "100%" }}>
      <TextEditor value={originalText} onChange={e => dispatch(setSourceText(e.target.value))} />
    </HotKeys>
  );
};
