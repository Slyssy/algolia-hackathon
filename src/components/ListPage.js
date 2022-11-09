import React from 'react';
import Post from './Post';
import pagination from '../images/pagination.png';

const ListPage = ({ searchResults }) => {
  // console.log(searchResults);
  const results = searchResults.map((story) => {
    // console.log(story);
    return <Post key={story.objectID} story={story} />;
  });

  const content = results.length ? (
    results
  ) : (
    <article>
      <p>No Matching Stories</p>
    </article>
  );

  return (
    <main>
      {content}
      <div className='pagination-container'>
        <img src={pagination} alt='pagination' className='pagination' />
      </div>
    </main>
  );
};

export default ListPage;
