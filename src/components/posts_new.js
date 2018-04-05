import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import RenderField from './render_field';
import validate from './validate';

class PostsNew extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={RenderField} />
        <Field label="Tags" name="tags" component={RenderField} />
        <Field label="Post Content" name="content" component={RenderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

export default reduxForm({ validate, form: 'NewPostsForm' })(connect(null, { createPost })(PostsNew));

