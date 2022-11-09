import React from 'react';
import moment from 'moment';

function currentTime(props) {
  // let now = moment(props.story.created_at, "YYYYMMDD").fromNow()
  // console.log(props.story.author, 'story');
  // props.story.map(item => {
  //     console.log(item.author)

  return (
    <ul>
      <li>
        <span className='dark-gray-text'>
          {props.story.points} | {props.story.author} |{' '}
          {moment(props.story.created_at, 'YYYYMMDD').fromNow()} |{' '}
          {`${props.story.num_comments} comments`}{' '}
        </span>
      </li>
    </ul>
  );
}

export default currentTime;
