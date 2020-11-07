import './App.css';
import ActivityList from './Activity/ActivityList.js'
import React, { useState } from "react";
import Menu from './Navbar/Menu';
import Video from './Video';
import Intro from './Intro';
import ListTeam from './Team/ListTeam';
import Rating from './Rating';
import Footer from './Footer';

function App() {



  return (
    <>
      <Menu></Menu>
      <Video></Video>
      <Intro></Intro>
      <ActivityList></ActivityList>
      <ListTeam />
      <button type="button" className="bouton btn btn-light">
        <a style={{ color: '#093219', fontWeight: 'bold' }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdvRV0sUPYy71hnE9HyyGE6Mpim2h9qarhSrd10E63PIocqkQ/viewform?usp=sf_link" target="_blank">
          Rejoindre l'équipe</a>
      </button>
      <Footer />
    </>
  );
}

export default App;
