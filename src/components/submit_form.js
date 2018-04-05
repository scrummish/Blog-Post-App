import { connect } from 'react-redux';
import { createPost } from '../actions';

function onSubmit(values) {
  createPost(values, () => {
    history.push('/');
  });
}

export default onSubmit;
