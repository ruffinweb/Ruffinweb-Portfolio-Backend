import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppContainer from "./components/AppContainer/AppContainer";
import FooterSmall from "./components/Footer/FooterSmall";
import Home from "./pages/Home/Home";
import RuffinWebTheme from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={RuffinWebTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
