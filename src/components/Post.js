// import BodyCard from './BodyCard';
import Details from './Details';
const Post = ({ story }) => {
  return (
    // <BodyCard data={story} />
    <ul className='story-list'>
      <li className='story-itm' key={story.objectID}>
        <span className='bold-text'>{story.title}</span>{' '}
        <span className='gray-text'>(</span>
        <a href={story.url}>{story.url}</a>
        <span className='gray-text'>)</span> <Details story={story} />
      </li>
    </ul>
  );
};

export default Post;
