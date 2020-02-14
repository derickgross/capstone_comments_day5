import React, { Component } from 'react';
import CommentsListContainer from './CommentsListContainer';
import CommentsFormContainer from './CommentsFormContainer';

const CommentDashboard = () => {
  return (
    <div>
      <CommentsListContainer />
      <CommentsFormContainer />
    </div>
  );
}

export default CommentDashboard;
