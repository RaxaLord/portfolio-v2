import React from 'react';
import './App.css';
import './App.scss';
import './Start.css';
import '98.css';
import { Route, Switch } from 'react-router-dom';
import Splash from './Components/Splash/Splash';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
