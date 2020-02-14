import React from 'react';
import ReactDOM from 'react-dom';
import CommentDashboard from './components/CommentDashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './lib/store';

// Comment dashboard
  // Comment list
    // Comment parent
      // Comment comment (comment and reply)
  // Form

ReactDOM.render(<Provider store={store}><CommentDashboard /></Provider>, document.getElementById('root'));
registerServiceWorker();
