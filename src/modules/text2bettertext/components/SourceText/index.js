import React from "react";
import { useSelector } from "react-redux";
import { selectIsEditingSourceText } from "../../selectors/layout";
import { selectSourceText } from "../../selectors/inputs";

import Input from "./Input";
import Table from "./Table";

export default () => {
  const isEditing = useSelector(selectIsEditingSourceText);
  const sourceText = useSelector(selectSourceText);

  console.log(isEditing || sourceText.length === 0);

  if (isEditing || sourceText.length === 0) {
    return <Input />;
  } else {
    return <Table />;
  }
};
