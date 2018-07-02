import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import GetCategories from '../GetCategories';
import GetJoke from '../GetJoke';

import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Wrapper>
        <GetCategories />
        <Switch>
          <Route
            path="/:category"
            component={GetJoke}
          />
        </Switch>
      </Wrapper>
    );
  }
}

export default withRouter(App);
