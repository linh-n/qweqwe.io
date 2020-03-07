import React from "react";
import { useSelector } from "react-redux";
import { selectShouldShowSourceInput } from "../../selectors/layout";

import Input from "./Input";
import Table from "./Table";

const SourcePanel = () => {
  const shouldEdit = useSelector(selectShouldShowSourceInput);

  if (shouldEdit) {
    return <Input />;
  } else {
    return <Table />;
  }
};

SourcePanel.whyDidYouRender = true;

export default React.memo(SourcePanel);
