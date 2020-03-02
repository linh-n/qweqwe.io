import React from "react";
import { useSelector } from "react-redux";
import { selectShouldShowSourceInput } from "../../selectors/layout";

import Input from "./Input";
import Table from "./Table";

export default () => {
  const shouldEdit = useSelector(selectShouldShowSourceInput);

  if (shouldEdit) {
    return <Input />;
  } else {
    return <Table />;
  }
};
