import React from "react";
import "./App.css";
import PropertiesList from "./components/views/PropertiesList";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
      <PropertiesList />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
