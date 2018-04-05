import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  
  onDelete = ()=>{
	const { id } = this.props.match.params;
	
	this.props.deletePost(id, ()=>{
		// programatic navigation
		this.props.history.push('/');
	});
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDelete}>
          Delete Post
        </button>
        {
		  post
          ? <div> <h3>Title: {post.title}</h3><p>Content: {post.content}</p> <p>Tags: {post.categories}</p></div>
          : <div>Loading…</div>
        }
      </div>
    );
  }
}

PostsShow.propTypes = {
  post: PropTypes.object,
  fetchPost: PropTypes.func.isRequired,
};

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);