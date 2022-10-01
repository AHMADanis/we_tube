import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/search_page/SearchPage";
import PlayBack from "./components/playback/PlayBack";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={[
              <div className="app__page">
                <SideBar />
                <SearchPage />
              </div>,
            ]}
          ></Route>
          <Route
            path="/"
            element={[
              <div className="app__page">
                <SideBar />
                <Home /> 
              </div>,
            ]}
          ></Route>
           <Route
            path="/playback"
            element={[
              <div className="app__page">
                <PlayBack /> 
              </div>,
            ]}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
