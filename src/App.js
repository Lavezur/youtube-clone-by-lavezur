import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Sidebar from './components/sidebar/sidebar'
import RecommendedVideos from './components/recommended-videos/recommended-videos'


function App() {
  return (
    <div className="App">

        <Header/>

        <div className="app__page">
            <Sidebar/>
            <RecommendedVideos/>
        </div>
    </div>
  );
}

export default App;
