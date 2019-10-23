import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ConverterForm from "./components/ConverterForm";
import ShortURLRedirectComponent from "./components/ShortURLRedirectComponent";
import ViewURLSComponent from "./components/ViewURLSComponent";

function App() {
  return (
    // using a short-urls route within the application itself
      <CenteredContentDiv>
      <Router>
          <Switch>
            <Route path={`/short-url/:shortURL`} component={ShortURLRedirectComponent} />
            <Route path="/view-urls" component={ViewURLSComponent} />
            <Route path="/" component={ConverterForm}/>
          </Switch>
      </Router>
    </CenteredContentDiv>
  );
}

export default App;


const CenteredContentDiv = styled.div`
    text-align: center;
`;