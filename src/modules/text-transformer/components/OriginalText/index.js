import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setOriginalText } from "../../reducer";
import { selectOriginalText } from "../../selectors";

import TextEditor from "shared-components/TextEditor";

export default () => {
  const originalText = useSelector(selectOriginalText);
  const dispatch = useDispatch();

  return <TextEditor value={originalText} onChange={e => dispatch(setOriginalText(e.target.value))} />;
};
