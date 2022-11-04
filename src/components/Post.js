// import BodyCard from './BodyCard';

const Post = ({ story }) => {
  return (
    // <BodyCard data={story} />
    <ul className='story-list'>
      <li className='story-itm' key={story.objectID}>
        {story.title} (<a href={story.url}>{story.url}</a>)
      </li>
    </ul>
  );
};

export default Post;
