import React, { Component } from "react";
import "./App.css";
import PropertiesList from "./components/views/PropertiesList";
import AppNavBar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import { Grid } from "@material-ui/core";
import Register from './components/security/Register'

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
                <Route path="/auth/register" exact component={Register}></Route>
              </Switch>
            </Grid>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
