import React from "react";
import Page from "components/Page";
import Header from "components/Header";
import Body from "components/Body";
import Background from "components/Background";

import TextTransformer from "modules/text-transformer/components/TextTransformer";

export default () => (
  <Background>
    <Page>
      <Header />
      <Body>
        <TextTransformer />
      </Body>
    </Page>
  </Background>
);
