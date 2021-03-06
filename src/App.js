import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//alle sider
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Login from "./components/Login";
import Enquiries from "./components/Enquiries";
import Messages from "./components/Messages";
import AddEstablishment from "./components/AddEstablishment";
import HotelInformation from "./components/HotelInformation";
import MakeEnquiry from "./components/MakeEnquiry";
import NoMatch from "./components/NoMatch";

//komponenter delt av alle sider
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="col-lg-12 App">
      <Router>
        <Header/>
          <Switch>
            <Route component={Hero} path="/" exact/>
            <Route component={Contact} path="/contact"/>
            <Route component={Login} path="/login"/>
            <Route component={Enquiries} path="/enquiries"/>
            <Route component={Messages} path="/messages"/>
            <Route component={AddEstablishment} path="/addestablishment"/>
            <Route path="/hotelinformation/:id" children={<HotelInformation/>}/>
            <Route path="/results/:id" children={<Results/>}/>
            <Route path="/makeenquiry/:id" children={<MakeEnquiry/>}/>
            <Route component={NoMatch} path="/404"/>
            <Route component={NoMatch} path="*"/> 
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
