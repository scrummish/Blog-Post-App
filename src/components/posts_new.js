import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
	render(){
		return(
			<form> 
				<Field name="title" component={}></Field>
				<Field name="categories"></Field>
				<Field name="content"></Field>
			</form>
		);
	};
};

export default reduxForm({
	form: 'NewPostsForm'
})(PostsNew);