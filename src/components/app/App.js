import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Overview from '../overview/Overview';
import {Route} from 'react-router-dom';
import TopPractices from '../top-practices/TopPractices';
import Outcomes from '../outcomes/Outcomes';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <div>
          <Route exact path='/overview' component={Overview}/>
          <Route exact path='/top-practices' component={TopPractices}/>
          <Route exact path='/outcomes' component={Outcomes}/>
        </div>
      </div>
    );
  }
}

export default App;
