import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SplitterLayout from "react-splitter-layout";
import { selectLayoutSplitLane1, selectLayoutSplitLane2, selectCurrentLayout } from "../../selectors/layout";
import { setLayoutSplitPane1, setLayoutSplitPane2 } from "../../reducer";

import StatusBar from "../StatusBar";
import SourceText from "../SourcePanel";
import TemplateText from "../TemplatePanel";
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

  const [s1, setS1] = useState(splitLane1);
  const [s2, setS2] = useState(splitLane2);

  const onSetSize1 = pct => setS1(pct);
  const onSetSize2 = pct => setS2(pct);
  const onDragEnd = () => {
    dispatch(setLayoutSplitPane1(s1));
    dispatch(setLayoutSplitPane2(s2));
  };

  return (
    <Main>
      <Editors>
        {currentLayout === "⫞" && (
          <SplitterLayout
            percentage
            primaryMinSize={25}
            secondaryMinSize={25}
            secondaryInitialSize={splitLane1}
            onSecondaryPaneSizeChange={onSetSize1}
            onDragEnd={onDragEnd}
          >
            <SplitterLayout
              vertical
              percentage
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane2}
              onSecondaryPaneSizeChange={onSetSize2}
              onDragEnd={onDragEnd}
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
            onSecondaryPaneSizeChange={onSetSize2}
            onDragEnd={onDragEnd}
          >
            <SourceText />
            <SplitterLayout
              percentage
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane1}
              onSecondaryPaneSizeChange={onSetSize1}
              onDragEnd={onDragEnd}
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
            onSecondaryPaneSizeChange={onSetSize1}
            onDragEnd={onDragEnd}
          >
            <SplitterLayout
              percentage
              vertical
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane2}
              onSecondaryPaneSizeChange={onSetSize2}
              onDragEnd={onDragEnd}
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
            onSecondaryPaneSizeChange={onSetSize1}
            onDragEnd={onDragEnd}
          >
            <SplitterLayout
              percentage
              primaryMinSize={25}
              secondaryMinSize={25}
              secondaryInitialSize={splitLane2}
              onSecondaryPaneSizeChange={onSetSize2}
              onDragEnd={onDragEnd}
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
