import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SplitterLayout from "react-splitter-layout";
import { selectLayoutSplitLane1, selectLayoutSplitLane2, selectCurrentLayout } from "../../selectors/layout";
import { setLayoutSplitPane1, setLayoutSplitPane2 } from "../../reducer";

import StatusBar from "../StatusBar";
import SourceText from "../SourceText";
import TemplateText from "../TemplateText";
import TransformedText from "../TransformedText";

import "./splitter.css";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-top: 15px;
`;

const Editors = styled.div`
  flex-grow: 1;
  position: relative;
  border-radius: 0 25px 25px 25px;
  overflow: hidden;
`;

const Text2BetterText = () => {
  const dispatch = useDispatch();
  const currentLayout = useSelector(selectCurrentLayout);
  const splitLane1 = useSelector(selectLayoutSplitLane1);
  const splitLane2 = useSelector(selectLayoutSplitLane2);

  return (
    <Main>
      <Editors>
        {currentLayout === "⫞" && (
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
              <SourceText />
              <TemplateText />
            </SplitterLayout>
            <TransformedText />
          </SplitterLayout>
        )}
        {currentLayout === "⫟" && (
          <SplitterLayout
            percentage
            vertical
            primaryMinSize={25}
            secondaryMinSize={25}
            secondaryInitialSize={splitLane2}
            onSecondaryPaneSizeChange={pct => {
              dispatch(setLayoutSplitPane2(pct));
            }}
          >
            <SourceText />
            <SplitterLayout
              percentage
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane1}
              onSecondaryPaneSizeChange={pct => {
                dispatch(setLayoutSplitPane1(pct));
              }}
            >
              <TemplateText />
              <TransformedText />
            </SplitterLayout>
          </SplitterLayout>
        )}
        {currentLayout === "=" && (
          <SplitterLayout
            percentage
            vertical
            primaryMinSize={15}
            secondaryMinSize={35}
            secondaryInitialSize={splitLane1}
            onSecondaryPaneSizeChange={pct => {
              dispatch(setLayoutSplitPane1(pct));
            }}
          >
            <SplitterLayout
              percentage
              vertical
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane2}
              onSecondaryPaneSizeChange={pct => {
                dispatch(setLayoutSplitPane2(pct));
              }}
            >
              <SourceText />
              <TemplateText />
            </SplitterLayout>
            <TransformedText />
          </SplitterLayout>
        )}
        {currentLayout === "∥" && (
          <SplitterLayout
            percentage
            primaryMinSize={15}
            secondaryMinSize={35}
            secondaryInitialSize={splitLane1}
            onSecondaryPaneSizeChange={pct => {
              dispatch(setLayoutSplitPane1(pct));
            }}
          >
            <SplitterLayout
              percentage
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane2}
              onSecondaryPaneSizeChange={pct => {
                dispatch(setLayoutSplitPane2(pct));
              }}
            >
              <SourceText />
              <TemplateText />
            </SplitterLayout>
            <TransformedText />
          </SplitterLayout>
        )}
      </Editors>
      <StatusBar />
    </Main>
  );
};

export default React.memo(Text2BetterText);
