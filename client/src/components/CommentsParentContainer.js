import { connect } from 'react-redux';
import CommentsParent from './CommentsParent';

const mapStateToProps = (state, ownProps) => {
	return {
		replies: state.replies.filter(reply => {
	    return reply.comment_id === ownProps.comment.id;
	  }),
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onMoreReplies: (event) => {
			event.preventDefault();
			const commentId = ownProps.comment.id;

			fetch(`/api/comment_replies?comment_id=${commentId}`)
			  .then((response) => {
			    return response.json();
			  })
			  .then((replies) => {
			    dispatch({
			      type: 'REPLIES_RECEIVED',
			      payload: {
			        replies: replies,
			        commentId: commentId,
			      },
			    });
			  })
			  .catch((err) => { console.log(err) });
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsParent);