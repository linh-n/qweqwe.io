import React from "react";
import { useSelector } from "react-redux";
import { selectShouldShowSourceInput } from "../../selectors/layout";

import Input from "./Input";
import Table from "./Table";

const SourcePanel = () => {
  const shouldEdit = useSelector(selectShouldShowSourceInput);

  return <>{shouldEdit ? <Input /> : <Table />}</>;
};

SourcePanel.whyDidYouRender = true;

export default React.memo(SourcePanel);
