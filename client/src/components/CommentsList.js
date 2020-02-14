import React from 'react';
import CommentsParentContainer from './CommentsParentContainer';

class CommentsList extends React.Component  {
	componentDidMount = () => {
    this.props.onFetchComments();
  }

  render() {
    return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {this.props.comments
        .map(comment => <CommentsParentContainer key={comment.id} comment={comment} />)}
    </div>
  )};
};

export default CommentsList;