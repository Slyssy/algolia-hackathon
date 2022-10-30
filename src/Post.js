const Post = ({ story }) => {
  return (
    <article>
      <h2>{story.title}</h2>
      <p>{story.url}</p>
      <p>Post ID: {story.id}</p>
    </article>
  );
};

export default Post;
