// import BodyCard from './BodyCard';
import Details from "./Details"
const Post = ({ story }) => {
  return (
    // <BodyCard data={story} />
    <ul className='story-list'>
      <li className='story-itm' key={story.objectID}>
        {story.title} (<a href={story.url}>{story.url}</a>) <Details story ={story} />
      </li>
    </ul>
  );
};

export default Post;
