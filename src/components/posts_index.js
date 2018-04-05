import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import RenderPosts from './render_posts';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {
      posts,
    } = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add A Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {RenderPosts(posts)}
        </ul>
      </div>
    );
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.object.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
