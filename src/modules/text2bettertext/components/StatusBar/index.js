import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { setLayoutCurrent } from "../../reducer";
import { selectCurrentLayout } from "../../selectors/layout";

import Button from "shared-components/Button";

const StatusBar = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  & > * {
    flex: 0 1 auto;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default () => {
  const dispatch = useDispatch();
  const currentLayout = useSelector(selectCurrentLayout);

  return (
    <StatusBar>
      <div></div>
      <div>
        <span>layout&nbsp;&nbsp;</span>
        {["⫞", "⫟", "=", "∥"].map(layout => (
          <Button
            icon
            key={layout}
            active={layout === currentLayout}
            onClick={() => dispatch(setLayoutCurrent(layout))}
          >
            {layout}
          </Button>
        ))}
      </div>
    </StatusBar>
  );
};
