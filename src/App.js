import React from 'react';
import './index.css';

//komponenter for alle sider
import Header from "./components/Header";
import Footer from "./components/Footer";


//alle sidene
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
