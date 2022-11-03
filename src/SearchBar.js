import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (stories, setSearchResults) => {
  // console.log(stories.setSearchResults);
  const handleSubmit = (event) => event.preventDefault();
  const handleSearchChange = (event) => {
    console.log("Event",event.target.value)
    stories.setInputValue(event.target.value)
    if (!event.target.value) {
      stories.setSearchResults(stories)}
    const resultsArray = stories.stories.filter(
      (story) => {
        return story.title.includes(event.target.value);
      }
      // ||
      // story.body.includes(event.targe.value)
    );
    stories.setSearchResults(resultsArray);
  };
  return (
    <header>
      <form className='search' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search__input'
          id='search'
          onChange={handleSearchChange}
        />
        <button className='search__button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
