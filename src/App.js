import supportedServicesImg from "./resources/Supported services.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./components/Home/Home";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import { LinkScreen } from "./components/LinkScreen/LinkScreen";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { LinkAccount } from "./components/LinkAccount/LinkAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderMenu />
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/link/:universalId" element={<LinkScreen />} />
            <Route path="/accounts" element={<LinkAccount />} />
            <Route path="*" element={<NotFound />} />
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
