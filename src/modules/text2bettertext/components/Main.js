import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SplitterLayout from "react-splitter-layout";
import {
  selectIsEditingSourceText,
  selectLayoutSplitLane1,
  selectLayoutSplitLane2,
} from "../selectors/layout";
import { setLayoutSplitPane1, setLayoutSplitPane2 } from "../reducer";

import Menu from "./Menu";
import SourceText from "./SourceText";
import TemplateText from "./TemplateText";
import Table from "./Table";
import TransformedText from "./TransformedText";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editors = styled.div`
  flex-grow: 1;
  position: relative;

  .splitter-layout {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .splitter-layout .layout-pane {
    position: relative;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;

    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 7.5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  .splitter-layout .layout-pane.layout-pane-primary {
    flex: 1 1 auto;
  }

  .splitter-layout > .layout-splitter {
    flex: 0 0 auto;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    background-color: transparent;
  }

  .splitter-layout .layout-splitter:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .splitter-layout.layout-changing {
    cursor: col-resize;
  }

  .splitter-layout.layout-changing > .layout-splitter {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .splitter-layout.splitter-layout-vertical {
    flex-direction: column;
  }

  .splitter-layout.splitter-layout-vertical.layout-changing {
    cursor: row-resize;
  }

  .splitter-layout.splitter-layout-vertical > .layout-splitter {
    width: 100%;
    height: 5px;
    cursor: row-resize;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectIsEditingSourceText);
  const splitLane1 = useSelector(selectLayoutSplitLane1);
  const splitLane2 = useSelector(selectLayoutSplitLane2);

  return (
    <Main>
      <Menu />
      <Editors>
        {isEditing && <SourceText />}
        {!isEditing && (
          <SplitterLayout
            percentage
            primaryMinSize={25}
            secondaryMinSize={25}
            secondaryInitialSize={splitLane1}
            onSecondaryPaneSizeChange={pct => {
              dispatch(setLayoutSplitPane1(pct));
            }}
          >
            <SplitterLayout
              vertical
              percentage
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane2}
              onSecondaryPaneSizeChange={pct => {
                dispatch(setLayoutSplitPane2(pct));
              }}
            >
              <Table />
              <TemplateText />
            </SplitterLayout>
            <TransformedText />
          </SplitterLayout>
        )}
      </Editors>
    </Main>
  );
};
