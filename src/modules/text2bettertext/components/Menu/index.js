import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { setLayoutCurrent, setLayoutIsEditing } from "../../reducer";
import { selectCurrentLayout, selectIsEditingSourceText } from "../../selectors/layout";

import Button from "shared-components/Button";

const Menu = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  & > * {
    flex: 0 1 auto;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const currentLayout = useSelector(selectCurrentLayout);
  const isEditingSourceText = useSelector(selectIsEditingSourceText);

  return (
    <Menu>
      {isEditingSourceText && (
        <div>
          <Button primary onClick={() => dispatch(setLayoutIsEditing(false))}>
            Proceed
          </Button>
        </div>
      )}
      {!isEditingSourceText && (
        <>
          <div>
            <Button primary onClick={() => dispatch(setLayoutIsEditing(true))}>
              Edit source text
            </Button>
            <Button>Clear</Button>
          </div>
          <div>
            {["⫞", "⫟", "=", "∥"].map(layout => (
              <Button
                key={layout}
                active={layout === currentLayout}
                onClick={() => dispatch(setLayoutCurrent(layout))}
              >
                {layout}
              </Button>
            ))}
          </div>
        </>
      )}
    </Menu>
  );
};
