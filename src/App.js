import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListPage from './components/ListPage';
import TabsForm from './components/TabsForm';

function App() {
  const [stories, setStories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState('');
  useState(() => {});

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page') // Added - "?&hitsPerPage=50"
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

  //

  return (
    <div className='page-container'>
      <SearchBar
        stories={stories}
        setSearchResults={setSearchResults}
        setInputValue={setInputValue}
      />
      <TabsForm
        stories={stories}
        searchResults={searchResults}
        character={setSearchResults}
        inputValue={inputValue}
      />
      <ListPage searchResults={searchResults} />
    </div>
  );
}

export default App;
