import { connect } from 'react-redux'
import CommentsList from './CommentsList'

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchComments: () => {
      fetch('/api/comments')
        .then((response) => {
          return response.json();
        })
        .then((commentsData) => {
          dispatch({
            type: 'COMMENTS_RECEIVED',
            payload: {
              comments: commentsData
            },
          });
        })
        .catch((err) => { console.log(err) });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);