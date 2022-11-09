import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logoLarge from '../images/search_hacker_logo.png';
import logoSmall from '../images/logo_sm.png';
import settingsLarge from '../images/settings_lg.png';
import settingsSmall from '../images/settings_sm.png';

const SearchBar = (stories, setSearchResults) => {
  // console.log(stories.setSearchResults);
  const handleSubmit = (event) => event.preventDefault();
  const handleSearchChange = (event) => {
    stories.setInputValue(event.target.value);
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
      <picture className='logo-container'>
        <source media='(min-width: 800px)' srcSet={logoLarge}></source>
        <img src={logoSmall} alt='search hacker logo' className='logo' />
      </picture>
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
      <picture className='setting-cog-container'>
        <source media='(min-width: 800px)' srcSet={settingsLarge}></source>
        <img src={settingsSmall} alt='search hacker logo' className='logo' />
      </picture>
    </header>
  );
};

export default SearchBar;
