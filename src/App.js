import React from "react";
import { Switch, Route } from "react-router-dom";

import Background from "components/Background";
import AppContainer from "components/AppContainer";
import PageContainer from "components/PageContainer";
import Header from "components/Header";

import Home from "pages/Home";

const App = () => (
  <Background>
    <AppContainer>
      <Header />
      <PageContainer>
        <Switch>
          <Route path={"/:language"} component={Home} exact />
        </Switch>
      </PageContainer>
    </AppContainer>
  </Background>
);

App.whyDidYouRender = true;

export default App;
