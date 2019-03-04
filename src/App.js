import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Link to={'/'}>Home</Link>
            <div>
              <ul>
                <li>
                  <Link to={'/create'}>Create</Link>
                </li>
                <li>
                  <Link to={'/index'}>Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />

          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
