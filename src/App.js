import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/project/:id' component={ProjectDetails}/>
              <Route path='/signin' component={Signin}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/create' component={CreateProject}/>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
