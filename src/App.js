import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/home";
import Repositories from "./pages/repos";
import SingleRepo from "./pages/SingleRepo";
import Error404 from "./pages/Error404";
import ErrorBoundary from "./pages/ErrorBoundary";
import TestError from "./components/TestError";
import Navigation from "./components/Navigation";
import "../src/styles/navigation.css";
import "./App.css";  
import { SearchBar } from "./components/search-filter";
// import { searchfilterLists } from "./components/searchfilterLists"


const App = () => {

  const [results, setResults] = useState([]);


  return (
    <ErrorBoundary>
      
      <Navigation />
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <searchfilterLists/>
      </div>
        <Routes className="main-container">
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repositories />} />
          <Route path="/repos/:userId" element={<SingleRepo />} />
          <Route path="/error404" element={<Error404 />} />

          <Route path="/testerror" element={<TestError />} />
      </Routes>
    </ErrorBoundary>
  );
}



export default App;
