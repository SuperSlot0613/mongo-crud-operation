import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import User from "./User";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/users/add">
            <AddUser />
          </Route>
          <Route exact path="/users/edit/:id">
            <EditUser />
          </Route>
          <Route exact path="/users/:id">
            <User />
          </Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
