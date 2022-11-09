import React, { useState, useEffect } from 'react';

export default function TabsForm(props) {
  const [searchCriteria, setSearchCriteria] = useState('All');
  // eslint-disable-next-line
  const [forCriteria, setForCriteria] = useState('Popularity');
  // eslint-disable-next-line
  const [byCriteria, setByCriteria] = useState('Alltime');
  const [tabResults, setTabResults] = useState([props.searchResults]);
  const [searchCriteriaResults, setSearchCriteriaResults] = useState([]);

  const handleSearchCriteria = (event) => {
    setSearchCriteria(event.target.value);
    switch (event.target.value) {
      case 'All':
        // if nothing has been put into the search bar for the first time
        if (!props.inputValue) {
          console.log('Hello');
          props.character(props.stories);
        } // now filter from the search bar logic
        else {
          console.log('Goodbye');
          props.character(tabResults);
        }
        break;
      case 'Stories':
        if (!props.inputValue) {
          console.log('Hello');
          const storiesArray1 = props.stories.filter(
            (story) => {
              return story._tags.includes('story');
            }
            // ||
            // story.body.includes(event.targe.value)
          );
          props.character(storiesArray1);
        } else {
          console.log('Goodbye');
          const storiesArray2 = tabResults.filter(
            (story) => {
              return story._tags.includes('story');
            }
            // ||
            // story.body.includes(event.targe.value)
          );
          props.character(storiesArray2);
        }

        break;
      case 'Comments':
        //displays only the comments
        if (!props.inputValue) {
          const CommentsArray1 = props.stories.filter((story) => {
            return story._tags.includes('comments');
          });
          props.character(CommentsArray1);
        } else {
          console.log('Goodbye');
          const CommentsArray2 = tabResults.filter((story) => {
            return story._tags.includes('comments');
          });
          props.character(CommentsArray2);
        }
        break;

      default:
        console.log('There is an error');
    }
  };
  const handleByCriteria = (event) => {
    setByCriteria(event.target.value);
    switch (event.target.value) {
      case 'Popularity':
        console.log('Initial', props.searchResults);
        let sortedArraybyPop = props.searchResults.slice().sort((a, b) => {
          return b.points - a.points;
        });
        props.character(sortedArraybyPop);
        console.log('Final', props.searchResults);
        break;

      case 'Date':
        console.log('Initial', props.searchResults);
        let sortedArraybyDate = props.searchResults.slice().sort((a, b) => {
          return b.created_at_i - a.created_at_i;
        });
        props.character(sortedArraybyDate);
        console.log('Should be', props.searchResults);
        break;
      default:
        console.log('There was an error');
    }
  };
  const handleForCriteria = (event) => {
    setForCriteria(event.target.value);
    const calcDaysPast = function (date1, date2) {
      return Math.abs(date2 - date1);
    };
    let utz = (string) => new Date(string).getTime();
    const today = new Date().getTime();
    switch (event.target.value) {
      case 'Alltime': {
        // if nothing has been put into the search bar but you haven't filtered it by all, stories, comments
        if (!props.inputValue && !searchCriteriaResults.length) {
          console.log('Hello');
          props.character(props.stories);
        } // if something has been put into the search bar but you haven't filtered it by all, stories, comments
        else if (props.inputValue && !searchCriteriaResults.length) {
          console.log('Goodbye');
          props.character(tabResults);
        } //if something has been put into the search bar and you have filtered it by all, stories, or comments
        else {
          props.character(searchCriteriaResults);
        }
        break;
      }
      case 'Last24h': {
        if (!props.inputValue && !searchCriteriaResults.length) {
          const last24HrArray1 = props.stories.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 86400000;
          });
          props.character(last24HrArray1);
        } else if (props.inputValue && !searchCriteriaResults.length) {
          const last24HrArray2 = tabResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 86400000;
          });
          props.character(last24HrArray2);
        } else {
          const last24HrArray3 = searchCriteriaResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 604800000;
          });
          props.character(last24HrArray3);
        }
        break;
      }
      case 'PastWeek': {
        if (!props.inputValue && !searchCriteriaResults.length) {
          const pastWeekArray1 = props.stories.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 604800000;
          });
          props.character(pastWeekArray1);
          // props.character(props.stories.filter(stories => calcDaysPast(utz(stories.created_at), today) < 604800000))
        } else if (props.inputValue && !searchCriteriaResults.length) {
          const pastWeekArray2 = tabResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 604800000;
          });
          props.character(pastWeekArray2);
        } else {
          const pastWeekArray3 = searchCriteriaResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 604800000;
          });
          props.character(pastWeekArray3);
        }
        break;
      }
      case 'PastMonth': {
        if (!props.inputValue && !searchCriteriaResults.length) {
          const pastMonthArray1 = props.stories.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 2592000000;
          });
          props.character(pastMonthArray1);
        } else if (props.inputValue && !searchCriteriaResults.length) {
          const pastMonthArray2 = tabResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 2592000000;
          });
          props.character(pastMonthArray2);
        } else {
          const pastMonthArray3 = searchCriteriaResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 2592000000;
          });
          props.character(pastMonthArray3);
        }
        break;
      }
      case 'PastYear': {
        if (!props.inputValue && !searchCriteriaResults.length) {
          const pastYearArray1 = props.stories.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 31536000000;
          });
          props.character(pastYearArray1);
        } else if (props.inputValue && !searchCriteriaResults.length) {
          console.log('BAD');
          const pastYearArray2 = tabResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 31536000000;
          });
          props.character(pastYearArray2);
        } else {
          const pastYearArray3 = searchCriteriaResults.filter((story) => {
            return calcDaysPast(utz(story.created_at), today) < 31536000000;
          });
          props.character(pastYearArray3);
        }
        break;
      }
      default:
        console.log('There was an error');
      // code block
    }
  };

  useEffect(
    () => {
      setTabResults(props.searchResults);
    },
    // eslint-disable-next-line
    [props.inputValue]
  );
  useEffect(
    () => {
      setSearchCriteriaResults(props.searchResults);
      // console.log('Hello Things have changed');
      // console.log(searchCriteria);
    },
    // eslint-disable-next-line
    [searchCriteria]
  );

  return (
    <form className='Tabs'>
      <label className='mobile' htmlFor='searchCriteria'>
        Search{' '}
      </label>
      <select
        className='searchCriteria'
        onChange={handleSearchCriteria}
        id='searchCriteria'
        name='searchCriteria'
      >
        <option value='All'>All</option>
        <option value='Stories'>Stories</option>
        <option value='Comments'>Comments</option>
      </select>
      <label className='mobile' htmlFor='byCriteria'>
        by{' '}
      </label>
      <select
        className='byCriteria'
        onChange={handleByCriteria}
        id='byCriteria'
        name='byCriteria'
      >
        <option value='Popularity'>Popularity</option>
        <option value='Date'>Date</option>
      </select>
      <label className='mobile' htmlFor='forCriteria'>
        for
      </label>
      <select
        className='forCriteria'
        onChange={handleForCriteria}
        id='forCriteria'
        name='forCriteria'
      >
        <option value='Alltime'>All time</option>
        <option value='Last24h'>Last 24h</option>
        <option value='PastWeek'>Past Week</option>
        <option value='PastMonth'>Past Month</option>
        <option value='PastYear'>Past Year</option>
      </select>
    </form>
  );
}
