import React from 'react';
import Comment from './Comment';
import store from '../lib/store';

const CommentsParent = (props) => {
  // let replies = props.replies.filter(reply => {
  //   return reply.comment_id === props.comment.id;
  // });

  let replies = props.replies.map(reply => {
    return <Comment key={reply.id} comment={reply} />
  })

  return (
    <div className="parent-comment">
      <Comment comment={props.comment} />

      <div className="replies">
        {replies}
        {(props.comment.replies_count !== replies.length) ?
          <a href="#" className="show_more" onClick={(event) => { props.onMoreReplies(event)}}>Show More Replies ({props.comment.replies_count - 1})</a> :
          null
        }

      </div>
    </div>
  );
};

export default CommentsParent;