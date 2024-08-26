import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experience";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Form />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
