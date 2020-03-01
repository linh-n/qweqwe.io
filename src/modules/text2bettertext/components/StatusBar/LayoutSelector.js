import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { setLayoutCurrent } from "../../reducer";
import { selectCurrentLayout } from "../../selectors/layout";

import Button from "shared-components/Button";

const LayoutSelector = styled.div`
  & > span {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default () => {
  const dispatch = useDispatch();
  const currentLayout = useSelector(selectCurrentLayout);

  return (
    <LayoutSelector>
      <span>layout&nbsp;&nbsp;</span>
      {["⫞", "⫟", "=", "∥"].map(layout => (
        <Button
          icon
          key={layout}
          active={layout === currentLayout}
          onClick={() => dispatch(setLayoutCurrent(layout))}
        >
          {layout === "∥" ? (
            <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>=</span>
          ) : (
            layout
          )}
        </Button>
      ))}
    </LayoutSelector>
  );
};
