import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount(){
		// match.params is provided, naturally by react router in order to
		// get access to the params in the url 
		if (!this.props.post){ // checks to see if post is already fetched
			const { id } = this.props.match.params;
			this.props.fetchPost(id);
		}
	}
	render(){

		const { post } = this.props;

		if (!post){
			return <div> Loading... </div>;
		};

		return(
			<div> 
				<Link to="/">Back To Index</Link>
				<h3>{post.title}</h3>
				<p>{post.content}</p>
			</div>
		);
	}
};

// state destructured because I only want the posts
// ownProps is the props object headed to the component 
function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);