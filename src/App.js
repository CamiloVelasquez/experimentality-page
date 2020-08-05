//librerias y paquetes
import React from "react";
import { Switch, Route } from "react-router-dom";

//paginas
import Home from "./Paginas/Home/home";
import AboutUs from "./Paginas/AboutUs/aboutUs";

//componentes
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

function App() {
  return ( <
    >
    <
    Header / >
    <
    Switch >
    <
    Route path = "/"
    exact component = { Home }
    />{" "} <
    Route path = "/aboutus"
    exact component = { AboutUs }
    />{" "} <
    /Switch>{" "} <
    Footer / >
    <
    />
  );
}

export default App;