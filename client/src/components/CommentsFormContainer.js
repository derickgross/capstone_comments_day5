import { connect } from 'react-redux'
import CommentsForm from './CommentsForm'

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (comment) => {
			fetch('/api/comments', {
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(comment),
			})
			  .then((response) => response.json())
			  .then((newComment) => {
			    dispatch({
			      type: 'COMMENT_CREATED',
			      payload: {
			        comment: newComment,
			      },
			    });
			  })
			  .catch((error) => {
			    console.error('Error:', error);
			  });
		},
	};
}

export default connect(null, mapDispatchToProps)(CommentsForm);