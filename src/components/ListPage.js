import React from 'react';
import Post from './Post';

const ListPage = ({ searchResults }) => {
  console.log(searchResults);
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

  return <main>{content}</main>;
};

export default ListPage;
