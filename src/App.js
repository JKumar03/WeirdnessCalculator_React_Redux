import React from 'react';
import { Header } from "./component/app-view/header";
import Routes from "./component/routes";
import { BrowserRouter } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <div className="content">
          <Routes />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
