import logo from "./resources/logo.png";
import supportedServicesImg from "./resources/Supported services.png";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { Home } from "./components/Home/Home";
import { LinkScreen } from "./components/LinkScreen/LinkScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img className="tune2GetherLogo" src={logo} alt="logo" />
          </Link>
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="link/:universalId" element={<LinkScreen />} />
            {/* <Route path="*" element={<Home />} /> - TODO: No match route  */}
          </Routes>
        </body>
        <footer>
          <img src={supportedServicesImg} alt="supportedServices" />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
