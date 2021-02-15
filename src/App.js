import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import Carousel from 'react-elastic-carousel'
import Particles from "react-particles-js";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Particles
      className="particles" 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Nav  />
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
