import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Styles
import './App.css';

// Components
import Dashboard from './pages/dashboard/dashboard';
import Features from './pages/features/features';
import Details from './pages/details/details';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/details' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
