// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListPage from './components/ListPage';
// import BodyCard from './components/BodyCard';

function App() {
  const [stories, setStories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useState(() => {});

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
      .then((res) => res.json())
      .then((data) => {
        const newsStories = data.hits;
        setStories(newsStories);
        return newsStories;
      })
      .then((newsStories) => {
        setSearchResults(newsStories);
      });

    // The empty array means "to run me once and only once"
  }, []);
  // console.log(stories);
  return (
    <>
      <SearchBar stories={stories} setSearchResults={setSearchResults} />
      {/* <BodyCard data={searchResults} /> */}
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default App;
