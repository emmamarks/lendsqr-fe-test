import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Login, Profile, Dashboard, Users} from "./components";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/" exact component = { () => <Login />}/>
          <Route path = "/profile" exact component = { () => <Profile />}/>
          <Route path = "/dashboard" exact component = { () => <Dashboard />}/>
          <Route path = "/users" exact component = { () => <Users />}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;