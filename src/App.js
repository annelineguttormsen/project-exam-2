import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//komponenter for alle sider
import Header from "./components/Header";
import Footer from "./components/Footer";


//alle sidene
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route component={Hero} path="/" exact/>
            {/* <Route component={NoMatch} path="*"/> */}
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
