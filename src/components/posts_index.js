import React, { Component } from 'react';
import _ from "lodash"

import { connect } from  'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	renderPosts(){
		return _.map(this.props.posts, (post) =>{
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			)
		})
	}

	componentDidMount(){
		this.props.fetchPosts();
	}
	render(){
		return(
			<div> 
				<ul>
					{this.renderPosts()}
				</ul>
			</div>
		);
	};
};

function mapStateToProps(state){
	return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);