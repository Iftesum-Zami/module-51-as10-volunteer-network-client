import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Events from './Components/Events/Events';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/home">
              <Home></Home>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/register">
              <Register></Register>
            </PrivateRoute>

            <PrivateRoute path="/events">
              <Events></Events>
            </PrivateRoute>

            <Route exact path="/">
              <Home></Home>
            </Route>

            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
