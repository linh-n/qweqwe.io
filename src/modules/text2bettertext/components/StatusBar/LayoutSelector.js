import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { setLayoutCurrent } from "../../reducer";
import { selectCurrentLayout } from "../../selectors/layout";

import Button from "shared-components/Button";

const LayoutSelectorStyled = styled.div`
  display: flex;
  align-items: center;

  & > span {
    color: rgba(255, 255, 255, 0.5);
  }

  .btns {
    display: inline-block;
    border-radius: 10px 10px 10px 0;
    overflow: hidden;
  }
`;

const LayoutSelector = () => {
  const dispatch = useDispatch();
  const currentLayout = useSelector(selectCurrentLayout);

  return (
    <LayoutSelectorStyled>
      <span>layout&nbsp;&nbsp;</span>
      <div className="btns">
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
      </div>
    </LayoutSelectorStyled>
  );
};

LayoutSelector.whyDidYouRender = true;

export default LayoutSelector;
