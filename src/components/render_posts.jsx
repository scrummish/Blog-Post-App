import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

function RenderPosts(props) {
  const posts = map(props, post => (
    <li className="list-group-item" key={post.id}>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return posts;
}

export default RenderPosts;

