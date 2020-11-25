import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Sidebar from './components/sidebar/sidebar'
import RecommendedVideos from './components/recommended-videos/recommended-videos'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/search-page/search-page";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route path="/search/:searchTerm">
                    <div className="app__page">
                        <Sidebar/>
                        <SearchPage />
                    </div>
                </Route>
                <Route path="/">
                    <div className="app__page">
                        <Sidebar/>
                        <RecommendedVideos/>
                    </div>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
