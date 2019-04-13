import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Body from './body';
import Experiences from './experiences';
import Projects from './projects';

const App = () => { // eslint-disable-line
  return (
    <Switch>
      <Route exact path={'/'} component={Body} />
      <Route exact path={'/#experiences'} component={Experiences} />
      <Route exact path={'/#projects'} component={Projects} />
    </Switch>
  );
};

export default App;
