import React, { Component } from "react";
import "./App.css";
import PropertiesList from "./components/views/PropertiesList";
import AppNavBar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import { Grid } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MuiThemeProvider theme={theme}>
            <AppNavBar/>
            <Grid container>
              <Switch>
                <Route path="/" exact component={PropertiesList}></Route>

              </Switch>
            </Grid>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
