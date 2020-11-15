import './App.css';
import React, { Component } from "react";
import Menu from './Navbar/Menu';
import Home from './home/Home';
import Footer from './Footer';
import QuiSommeNous from './qsn/QuiSommeNous'
import Event from './events/Event'
import Sortie from './sortie/Sortie'
import Réglement from './Réglement';



import { Route } from 'react-router-dom';
import TeamBuilding from './teamBuilding/TeamBuilding';
import Contact from './Contact';

function App() {



  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/qsn" component={QuiSommeNous} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/sortie" component={Sortie} />
      <Route exact path="/TeamBuilding" component={TeamBuilding} />
      <Route exact path="/reglement" component={Réglement} />
      <Route exact path="/contact" component={Contact} />



      <Footer />
    </>
  );
}

export default App;
