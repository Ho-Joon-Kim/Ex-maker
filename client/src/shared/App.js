import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, Pin, View } from './../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/pin" component={Pin}/>
        <Route path="/view" component={View}/>
      </div>
    );
  }
}

export default App;
