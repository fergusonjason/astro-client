import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import AppHeader from "./components/shared/AppHeader";
import AppBody from "./components/shared/AppBody";
import AppFooter from "./components/shared/AppFooter";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
          <AppHeader />
          <AppBody />
          <AppFooter />

      </div>
    </BrowserRouter>
  );
}

export default App;
