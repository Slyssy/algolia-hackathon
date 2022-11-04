import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/search_hacker_logo.png';
import settingsCog from '../images/settings.png';

const SearchBar = (stories, setSearchResults) => {
  // console.log(stories.setSearchResults);
  const handleSubmit = (event) => event.preventDefault();
  const handleSearchChange = (event) => {
    if (!event.target.value) {
      stories.setSearchResults(stories);
    }

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
      <div className='logo-container'>
        <img src={logo} alt='search hacker logo' className='logo' />
      </div>
      <form className='search' onSubmit={handleSubmit}>
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type='search'
          className='search__input'
          id='search'
          placeholder='Search stories by title, url or author'
          onChange={handleSearchChange}
        />
      </form>
      <div className='setting-cog-container'>
        <img src={settingsCog} alt='settings gear' />
      </div>
    </header>
  );
};

export default SearchBar;
